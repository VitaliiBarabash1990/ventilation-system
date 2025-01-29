import s from "./Services.module.css";
import menus from "./menus.json";

const Services = () => {
	return (
		<div className={`section ${s.Services__section}`}>
			<div className="container">
				<div className={s.Services__section_wraper}>
					<h2 className={s.Services__section_title}>Наші послуги</h2>
					<div className={s.Services__section_acord}>
						<ul className={s.Services__section_list}>
							{menus.map((menu, index) => (
								<li key={index} className={s.Services__section_item}>
									<div className={s.Services__section_acord_button}>{menu}</div>
								</li>
							))}
						</ul>
						<ul className={s.Services__section_acord_list}>
							<li className={s.Services__section_acord_item}>
								<h3 className={s.Services__section_acord_title}>
									Припливна вентиляція
								</h3>
								<ul className={s.Services__section_services_list}>
									<li className={s.Services__section_services_item}>
										<svg className={s.Services__section_icon}>
											<use href="./symbol-defs.svg#icon-Ellipse-4"></use>
										</svg>
										<p className={s.Services__section_text}>
											Постійне надходження свіжого і чистого повітря навіть при
											зачинених вікнах
										</p>
									</li>
									<li className={s.Services__section_services_item}>
										<svg className={s.Services__section_icon}>
											<use href="./symbol-defs.svg#icon-Ellipse-4"></use>
										</svg>
										<p className={s.Services__section_text}>
											Знижує ризик виникнення алергічних та респіраторних
											захворювань
										</p>
									</li>
									<li className={s.Services__section_services_item}>
										<svg className={s.Services__section_icon}>
											<use href="./symbol-defs.svg#icon-Ellipse-4"></use>
										</svg>
										<p className={s.Services__section_text}>
											Запобігає утворенню плісняви та конденсату в приміщенні.
										</p>
									</li>
								</ul>
							</li>
							<li className={s.Services__section_acord_item}>
								<picture>
									<source
										srcSet="/img/ventiliation2_x1.png 1x, /img/ventiliation2_x2.png 2x"
										type="image/png"
									/>
									<img src="/img/ventiliation2_x1.png 1x" alt="workers" />
								</picture>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
