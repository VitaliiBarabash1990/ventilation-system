"use client";
import { useState } from "react";
import s from "./Accord.module.css";
import accordionData from "./accordionData.json";

const Accord = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	return (
		<div className={s.Services__section_acord}>
			{accordionData.map((item, index) => (
				<div key={index} className={s.button_wraper}>
					{/* Кнопка основная */}
					<button
						className={`${s.Services__section_acord_button} ${
							activeIndex === index ? s.active : ""
						}`}
						onClick={() => setActiveIndex(activeIndex === index ? null : index)}
					>
						{item.title}
					</button>

					{/* Кнопка для мобильных */}
					<button
						className={`${s.Services__section_acord_button_mob} ${
							activeIndex === index ? s.active : ""
						}`}
						onClick={() => setActiveIndex(activeIndex === index ? null : index)}
					>
						{item.title}
						<svg className={s.button_icon}>
							<title>button_errow</title>
							<image href="/arrow_top.svg" x="0" y="0" height="23" width="23" />
						</svg>
					</button>

					{/* Подменю с плавным открытием */}
					<div
						className={`${s.Services__section_acord_list_mob} ${
							activeIndex === index ? s.open : ""
						}`}
					>
						<h3 className={s.Services__section_acord_title}>{item.title}</h3>
						<div className={s.acord_wraper}>
							<div className={s.Services__section_acord_descr}>
								<ul className={s.Services__section_services_list}>
									{item.content.map((text, idx) => (
										<li key={idx} className={s.Services__section_services_item}>
											<svg className={s.Services__section_icon}>
												<use href="./symbol-defs.svg#icon-Ellipse-4"></use>
											</svg>
											<p className={s.Services__section_text}>{text}</p>
										</li>
									))}
								</ul>
							</div>
							<div className={s.Services__section_acord_image}>
								<picture>
									<source srcSet={item.image_x1_x2} type="image/png" />
									<img src={item.image_x1} alt={`ventilation ${index + 1}`} />
								</picture>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accord;
