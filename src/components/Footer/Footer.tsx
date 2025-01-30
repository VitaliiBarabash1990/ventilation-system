import Link from "next/link";
import s from "./Footer.module.css";

const Footer = () => {
	return (
		<div className={`section ${s.Footer__section}`}>
			<div className="container">
				<div className={s.Footer__section_wraper}>
					<ul className={s.Footer__section_footer_descr_list}>
						<li className={s.Footer__section_descr_item}>
							<Link href="/home">
								<svg className={s.Footer__container_logo}>
									<title>button_errow</title>
									<image href="/Logo.svg" x="0" y="0" height="54" width="100" />
								</svg>
							</Link>
						</li>
						<li className={s.Footer__section_descr_item}>
							<h3 className={s.Footer__section_title}>
								Проєктуємо, монтуємо та обслуговуємо вентиляційні системи для
								дому, офісу та промислових приміщень
							</h3>
						</li>
						<li className={s.Footer__section_descr_item}>
							<p className={s.Footer__section_footer_text}>Соціальні мережі:</p>
							<ul className={s.Footer__section_soc_icon_list}>
								<li className={s.Footer__section_soc_icon_item}>
									<Link href="http://instagram.com" target="_blank">
										<svg className={s.Footer__container_soc_icon}>
											<title>button_errow</title>
											<image href="/soc_icon/instagram.svg" x="0" y="0" />
										</svg>
									</Link>
								</li>
								<li className={s.Footer__section_soc_icon_item}>
									<Link href="http://telegram.com" target="_blank">
										<svg className={s.Footer__container_soc_icon}>
											<title>button_errow</title>
											<image href="/soc_icon/telegram.svg" x="0" y="0" />
										</svg>
									</Link>
								</li>
								<li className={s.Footer__section_soc_icon_item}>
									<Link href="http://facebook.com" target="_blank">
										<svg className={s.Footer__container_soc_icon}>
											<title>button_errow</title>
											<image href="/soc_icon/facebook.svg" x="0" y="0" />
										</svg>
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<ul className={s.Footer__section_footer_list}>
						<li className={s.Footer__section_footer_item}>
							<Link href="#Services">Послуги</Link>
						</li>
						<li className={s.Footer__section_footer_item}>
							<Link href="#OurWorks">Наші роботи</Link>
						</li>
						<li className={s.Footer__section_footer_item}>
							<Link href="#Benefits">Переваги</Link>
						</li>
						<li className={s.Footer__section_footer_item}>
							<Link href="#Reviews">Відгуки</Link>
						</li>
						<li className={s.Footer__section_footer_item}>
							<Link href="#Contacts">Контакти</Link>
						</li>
					</ul>
					<ul className={s.Footer__section_footer_address_list}>
						<li className={s.Footer__section_footer_address_item}>
							Просп. Миколи Бажана, 24/1
						</li>
						<li className={s.Footer__section_footer_address_item}>
							<Link href="mailto:VentilationKyiv@ukr.net">
								VentilationKyiv@ukr.net
							</Link>
						</li>
						<li className={s.Footer__section_footer_address_item}>
							Пн - Пт 09:00 до 18:00
						</li>
						<li className={s.Footer__section_footer_address_item}>
							<Link href="tel:+380935482200">+380 (93) 548-22-00</Link>
							<Link href="tel:+380733442299">+380 (73) 344-22-99</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Footer;
