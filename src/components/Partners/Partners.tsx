import React from "react";
import s from "./Partners.module.css";

const Partners = () => {
	const brands = [
		"/brands/mitsubishi.svg",
		"/brands/cooper_hunter.svg",
		"/brands/gree.svg",
		"/brands/neoclima.svg",
		"/brands/toshiba.svg",
		"/brands/daikin.svg",
		"/brands/lg.svg",
		"/brands/panasonic.svg",
	];
	return (
		<div className={`section ${s.Partners__section}`}>
			<div className="container">
				<h2 className={s.Partners__section_title}>Наші партнери</h2>
				<ul className={s.Partners__section_list}>
					{brands.map((brand, index) => (
						<li key={index} className={s.Partners__section_item}>
							<svg className={s.Partners__section_item_icon}>
								<title>element</title>
								<image href={brand} />
							</svg>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Partners;
