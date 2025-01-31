import Link from "next/link";
import s from "./Contacts.module.css";

const Contacts = () => {
	return (
		<div id="Contacts" className={`section ${s.Contacts__section}`}>
			<div className="container">
				<div className={s.Contacts__section_wraper}>
					<h2 className={s.Contacts__section_title}>Контакти</h2>
					<div className={s.Contacts__section_container}>
						<ul className={s.Contacts__section_list}>
							<li className={s.Contacts__section_item}>
								<svg className={s.Contacts__section_icon}>
									<use href="/symbol-defs.svg#icon-location"></use>
								</svg>
								<p className={s.Contacts__section_text}>
									Просп. Миколи Бажана, 24/1
								</p>
							</li>
							<li className={s.Contacts__section_item}>
								<svg className={s.Contacts__section_icon}>
									<use href="/symbol-defs.svg#icon-Group_email"></use>
								</svg>
								<p className={s.Contacts__section_text_email}>
									VentilationKyiv@ukr.net
								</p>
							</li>
							<li className={s.Contacts__section_item}>
								<svg className={s.Contacts__section_icon}>
									<use href="/symbol-defs.svg#icon-proicons_clock"></use>
								</svg>
								<p className={s.Contacts__section_text}>
									Пн - Пт 09:00 до 18:00
								</p>
							</li>
							<li className={s.Contacts__section_item}>
								<svg className={s.Contacts__section_icon}>
									<use href="/symbol-defs.svg#icon-line-md_phone"></use>
								</svg>
								<p className={s.Contacts__section_text}>
									+380 (93) 548-22-00
									<br />
									+380 (73) 344-22-99
								</p>
							</li>

							<li
								className={`${s.Contacts__section_soc_icon_item} ${s.Contacts__section_soc_color_fiolet}`}
							>
								<Link
									href="http://facebook.com"
									target="_blank"
									className={s.Contacts__section_link_soc}
								>
									<svg className={s.Contacts__container_soc_icon}>
										<title>button_errow</title>
										<image href="/soc_icon/fa-brands_viber.svg" x="0" y="0" />
									</svg>
									<p className={s.Contacts__section_soc_text}>
										Написати в Viber
									</p>
								</Link>
							</li>

							<li
								className={`${s.Contacts__section_soc_icon_item} ${s.Contacts__section_soc_color_blue}`}
							>
								<Link
									href="http://facebook.com"
									target="_blank"
									className={s.Contacts__section_link_soc}
								>
									<svg className={s.Contacts__container_soc_icon}>
										<title>button_errow</title>
										<image
											href="/soc_icon/fa-brands_telegram.svg"
											x="0"
											y="0"
										/>
									</svg>
									<p className={s.Contacts__section_soc_text}>
										Написати в Telegram
									</p>
								</Link>
							</li>

							<li
								className={`${s.Contacts__section_soc_icon_item} ${s.Contacts__section_soc_color_green}`}
							>
								<Link
									href="http://facebook.com"
									target="_blank"
									className={s.Contacts__section_link_soc}
								>
									<svg className={s.Contacts__container_soc_icon}>
										<title>button_errow</title>
										<image href="/soc_icon/la_whatsapp.svg" x="0" y="0" />
									</svg>
									<p className={s.Contacts__section_soc_text}>
										Написати в WhatsApp
									</p>
								</Link>
							</li>
						</ul>

						<div className={s.Contacts__section_map}>
							<iframe
								className={s.Contacts__section_frame}
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11094.435534795293!2d30.632462412153654!3d50.396183784738476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c4522c3cee15%3A0x322a0516d497938d!2sMykoly%20Bazhana%20Ave%2C%2024%2F1%2C%20Kyiv%2C%20Ukraine%2C%2002000!5e0!3m2!1sen!2spl!4v1737924034223!5m2!1sen!2spl"
								allowFullScreen={true}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contacts;
