"use client";
import { useState } from "react";
import s from "./Accord.module.css";
import accordionData from "./accordionData.json";

const Accord = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<div className={s.Services__section_acord}>
			{/* Верхние кнопки */}
			<div className={s.Services__section_list}>
				{accordionData.map((item, index) => (
					<button
						key={index}
						className={`${s.Services__section_acord_button} ${
							activeIndex === index ? s.active : ""
						}`}
						onClick={() => setActiveIndex(index)}
					>
						{item.title}
					</button>
				))}
			</div>

			{/* Контент */}
			<div className={s.Services__section_acord_list}>
				<div className={s.Services__section_acord_descr}>
					<h3 className={s.Services__section_acord_title}>
						{accordionData[activeIndex].title}
					</h3>
					<ul className={s.Services__section_services_list}>
						{accordionData[activeIndex].content.map((text, idx) => (
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
						<source
							srcSet={accordionData[activeIndex].image_x1_x2}
							type="image/png"
						/>
						<img
							src={accordionData[activeIndex].image_x1}
							alt={`ventilation ${activeIndex + 1}`}
						/>
					</picture>
				</div>
			</div>
		</div>
	);
};

export default Accord;
