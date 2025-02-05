import Link from "next/link";
import s from "./NavigationMob.module.css";
import clsx from "clsx";

type MyComponentProps = {
	isModal: boolean;
	setMenuOpen: (open: boolean) => void; // Указываем конкретный тип
};

export const NavigationMob = ({ isModal, setMenuOpen }: MyComponentProps) => {
	const handlerSubmit = () => {
		if (isModal) {
			setMenuOpen(false);
		}
	};

	const linkDatas = [
		{ id: 0, link: "/", text: "Головна" },
		{ id: 1, link: "#Services", text: "Послуги" },
		{ id: 2, link: "#OurWorks", text: "Наші роботи" },
		{ id: 3, link: "#Benefits", text: "Переваги" },
		{ id: 4, link: "#Reviews", text: "Відгуки" },
		{ id: 5, link: "#Contacts", text: "Контакти" },
	];

	return (
		<ul className={clsx(s.navMenu, isModal && s.navMenu_modal)}>
			{linkDatas.map((linkData) => (
				<li key={linkData.id} className={s.navMenu__item_link}>
					<Link
						href={linkData.link}
						onClick={handlerSubmit}
						className={s.navMenu__link}
					>
						{linkData.text}
					</Link>
				</li>
			))}
		</ul>
	);
};
