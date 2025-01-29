import s from "./Benefits.module.css";
import benefits from "./benefits.json";

const Benefits = () => {
	return (
		<div className={`section ${s.Benefits__section}`}>
			<div className="container">
				<div className={s.Benefits__section_wraper}>
					<h2 className={s.Benefits__section_title}>Наші Переваги</h2>
					<ul className={s.Benefits__section_list}>
						{benefits.map((benefit, index) => (
							<li key={index} className={s.Benefits__section_item}>
								<svg className={s.Benefits__section_item_icon}>
									<use href={benefit.img}></use>
								</svg>
								<h3 className={s.Benefits__section_item_title}>
									{benefit.title}
								</h3>
								<p className={s.Benefits__section_item_text}>{benefit.text}</p>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Benefits;
