"use client";
import { useState } from "react";
import s from "./Accord.module.css";
import accordionData from "./accordionData.json";

const Accord = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const currentIndex = activeIndex ?? 0;

	return (
		<div className={s.Services__section_acord}>
			{/* Верхние кнопки */}
			<div className={s.Services__section_list}>
				{accordionData.map((item, index) => (
					<div key={index} className={s.button_wraper}>
						<button
							className={`${s.Services__section_acord_button} ${
								currentIndex === index ? s.active : ""
							}`}
							onClick={() =>
								setActiveIndex(activeIndex === index ? null : index)
							}
						>
							{item.title}
						</button>
						<button
							className={`${s.Services__section_acord_button_mob} ${
								activeIndex === index ? s.active : ""
							}`}
							onClick={() =>
								setActiveIndex(activeIndex === index ? null : index)
							}
						>
							{item.title}
							<svg className={s.button_icon}>
								<title>button_errow</title>
								<image
									href="/arrow_top.svg"
									x="0"
									y="0"
									height="23"
									width="23"
								/>
							</svg>
						</button>
						{activeIndex === index && (
							<div className={s.Services__section_acord_list_mob}>
								<h3 className={s.Services__section_acord_title}>
									{accordionData[activeIndex].title}
								</h3>
								<div className={s.acord_wraper}>
									<div className={s.Services__section_acord_descr}>
										<ul className={s.Services__section_services_list}>
											{accordionData[activeIndex].content.map((text, idx) => (
												<li
													key={idx}
													className={s.Services__section_services_item}
												>
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
						)}
					</div>
				))}
			</div>
			{/* Контент */}
			<AccordionContent index={currentIndex} />
		</div>
	);
};

// Компонент для рендеринга контента
const AccordionContent = ({ index }: { index: number }) => (
	<div className={s.Services__section_acord_list}>
		<div className={s.Services__section_acord_descr}>
			<h3 className={s.Services__section_acord_title}>
				{accordionData[index].title}
			</h3>
			<ul className={s.Services__section_services_list}>
				{accordionData[index].content.map((text, idx) => (
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
				<source srcSet={accordionData[index].image_x1_x2} type="image/png" />
				<img
					src={accordionData[index].image_x1}
					alt={`ventilation ${index + 1}`}
				/>
			</picture>
		</div>
	</div>
);

export default Accord;
