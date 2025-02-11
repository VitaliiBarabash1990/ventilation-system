import s from "./RegistrationForm.module.css";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import toast, { Toaster } from "react-hot-toast";

interface FormValues {
	name: string;
	number: string;
	message: string;
}

export default function RegistrationForm() {
	const initialValues: FormValues = {
		name: "",
		number: "",
		message: "",
	};

	const onlyWords = /^[a-zA-Zа-яА-ЯіІєЄїЇ]+$/;
	// const phoneNumberRules = /^(\+48\d{9}|\+380\d{9})$/;
	const phoneNumberRules = /^(\+380\d{9})$/;

	const req = [
		{ p0: "ТІЛЬКИ СЛОВА!" },
		{ p1: "Мінімум 3 символа!" },
		{ p2: "Максимум 30 символів!" },
		{ p3: "Це поле обов'язкове!" },
		{ p4: "Не коректрий номер телефону!" },
		{ p5: "Ведіть номер в форматі +380123456789 без пробілів!" },
		{ p6: "Повідомлення повинно містити від 10 до 500 символів!" },
	];

	const orderSchema = Yup.object().shape({
		name: Yup.string()
			.matches(onlyWords, `${req[0].p0}`)
			.min(3, `${req[1].p1}`)
			.max(30, `${req[2].p2}`)
			.required(`${req[3].p3}`),
		number: Yup.string()
			.matches(phoneNumberRules, { message: `${req[4].p4}` })
			.required(`${req[5].p5}`),
		message: Yup.string()
			.min(10, `${req[6].p6}`)
			.max(500, `${req[6].p6}`)
			.required(`${req[3].p3}`),
	});

	const handleAdd = async (
		values: FormValues,
		{ resetForm }: FormikHelpers<FormValues>
	) => {
		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values),
			});

			if (response.ok) {
				toast.success("Повідомлення успішно відправлено!");
				resetForm();
			} else {
				toast.error("Помилка при відправці повідомлення.");
			}
		} catch (error) {
			console.error("Помилка відправки:", error);
			toast.error("Помилка при відправці повідомлення.");
		}
	};

	return (
		<div className={s.container__form}>
			<div className={s.container__title}>
				<h2 className={s.formik__title}>
					Заповніть форму і ми вам зателефонуємо!
				</h2>
			</div>

			<Formik
				initialValues={initialValues}
				onSubmit={handleAdd}
				validationSchema={orderSchema}
			>
				<Form className={s.form}>
					<label className={s.label}>
						<p className={s.formik__name_label}>Ваше ім`я:</p>
						<Field className={s.formik__input} type="text" name="name" />
						<ErrorMessage name="name" component="p" className={s.error} />
					</label>
					<label className={s.label}>
						<p className={s.formik__name_label}>Номер телефону:</p>
						<Field className={s.formik__input} type="tel" name="number" />
						<ErrorMessage name="number" component="p" className={s.error} />
					</label>
					<label className={s.label}>
						<p className={s.formik__name_label}>Повідомлення:</p>
						<Field
							className={`${s.formik__input} ${s.formik__textarea}`}
							as="textarea"
							name="message"
							rows={5}
						/>
						<ErrorMessage name="message" component="p" className={s.error} />
					</label>
					<button className={s.formik__btn} type="submit">
						Залишити Заявку
						<svg className={s.button_icon}>
							<title>button_errow</title>
							<image
								href="/button_errow.svg"
								x="0"
								y="0"
								height="23"
								width="23"
							/>
						</svg>
					</button>
				</Form>
			</Formik>
			<Toaster />
		</div>
	);
}
