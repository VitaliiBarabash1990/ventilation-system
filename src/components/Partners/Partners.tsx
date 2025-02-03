import React from "react";
import s from "./Partners.module.css";
import Image from "next/image";

const Partners = () => {
	const brandspng = [
		"/brands/mitsubishi.png",
		"/brands/cooper_hunter.png",
		"/brands/gree.png",
		"/brands/neoclima.png",
		"/brands/toshiba.png",
		"/brands/daikin.png",
		"/brands/lg.png",
		"/brands/panasonic.png",
	];
	return (
		<div id="Partners" className={`section ${s.Partners__section}`}>
			<div className="container">
				<h2 className={s.Partners__section_title}>Наші партнери</h2>
				<ul className={s.Partners__section_list}>
					{brandspng.map((brand, index) => (
						<li key={index} className={s.Partners__section_item}>
							<Image
								src={brand}
								alt={`${index}+1`}
								width={200}
								height={78}
								className={s.avatar}
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Partners;
