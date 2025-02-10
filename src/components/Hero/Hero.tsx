"use client";

import { useState } from "react";
import s from "./Hero.module.css";
import Modal from "../Modal/Modal";
import RegistrationForm from "../UI/RegistrationForm/RegistrationForm";

const Hero = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const toggleModal = () => {
		setIsOpenModal((prev) => !prev);
	};

	return (
		<div className={`section ${s.Hero__section}`}>
			<div className="container">
				<div className={s.Hero__section_wraper}>
					<div className={s.Hero__section_info}>
						<h1 className={s.Hero__section_title}>
							Монтаж системи вентиляції та кондиціювання
						</h1>
						<p className={s.Hero__section_text}>
							Проєктуємо, монтуємо та обслуговуємо вентиляційні системи для
							дому, офісу та промислових приміщень
						</p>
						<ul className={s.Hero__section_list}>
							<li className={s.Hero__section_item}>
								<svg className={s.Hero__section_item_icon}>
									<use href="/symbol-defs.svg#icon-solar_notebook-broken"></use>
								</svg>
								<div className={s.Hero__section_info_descr}>
									<h3 className={s.Hero__section_info_descr_title}>Проєкт</h3>
									<p className={s.Hero__section_info_descr_text}>
										Припливної вентиляції
									</p>
								</div>
							</li>
							<li className={s.Hero__section_item}>
								<svg className={s.Hero__section_item_icon}>
									<use href="/symbol-defs.svg#icon-flowbite_clock-outline"></use>
								</svg>
								<div className={s.Hero__section_info_descr}>
									<h3 className={s.Hero__section_info_descr_title}>
										Термін виконання
									</h3>
									<p className={s.Hero__section_info_descr_text}>від 7 днів</p>
								</div>
							</li>
							<li className={s.Hero__section_item}>
								<svg className={s.Hero__section_item_icon}>
									<use href="/symbol-defs.svg#icon-lucide_notebook-text"></use>
								</svg>
								<div className={s.Hero__section_info_descr}>
									<h3 className={s.Hero__section_info_descr_title}>Гарантія</h3>
									<p className={s.Hero__section_info_descr_text}>
										від 2-х років
									</p>
								</div>
							</li>
						</ul>
						<button
							type="button"
							onClick={toggleModal}
							className={s.Hero__section_button}
						>
							ЗАЛИШИТИ ЗАЯВКУ
							<svg className={s.Hero__section_button_icon}>
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
						{isOpenModal && (
							<Modal close={toggleModal}>
								<RegistrationForm />
							</Modal>
						)}
					</div>
					<div className={s.Hero__section_img}>
						<picture>
							<source
								srcSet="/img/ventiliation_x1.png 1x, /img/ventiliation_x2.png 2x"
								type="image/jpeg"
							/>
							<img src="/img/ventiliation_x1.png" alt="Описание изображения" />
						</picture>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
