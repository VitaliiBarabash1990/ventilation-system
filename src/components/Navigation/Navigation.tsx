import Link from "next/link";
import s from "./Navigation.module.css";

const Navigation = () => {
	return (
		<div className={`container ${s.Navigation__container}`}>
			<nav className={s.Navigation__container_wrap}>
				<ul className={s.Navigation__container_nav_list}>
					<li className={s.Navigation__container_nav_item}>
						<Link href="/">
							<svg className={s.Navigation__container_logo}>
								<title>button_errow</title>
								<image href="/Logo.svg" x="0" y="0" height="50" width="100" />
							</svg>
						</Link>
					</li>
					<li className={s.Navigation__container_nav_item}>
						<Link href="#Services">Послуги</Link>
					</li>
					<li className={s.Navigation__container_nav_item}>
						<Link href="#OurWorks">Наші роботи</Link>
					</li>
					<li className={s.Navigation__container_nav_item}>
						<Link href="#Benefits">Переваги</Link>
					</li>
					<li className={s.Navigation__container_nav_item}>
						<Link href="#Reviews">Відгуки</Link>
					</li>
					<li className={s.Navigation__container_nav_item}>
						<Link href="#Contacts">Контакти</Link>
					</li>
				</ul>
				<address>
					<ul className={s.Navigation__container_address_list}>
						<li className={s.Navigation__container_address_item}>
							<svg className={s.Navigation__container_address_icon}>
								<use href="/symbol-defs.svg#icon-tel"></use>
							</svg>
							<Link href="mailto:lloydjefferson@gmail.com">
								lloydjefferson@gmail.com
							</Link>
						</li>
						<li className={s.Navigation__container_address_item}>
							<svg className={s.Navigation__container_address_icon}>
								<use href="/symbol-defs.svg#icon-email"></use>
							</svg>
							<Link href="tel:+3801111111111">+380 11 1111 11 11</Link>
						</li>
					</ul>
				</address>
			</nav>
		</div>
	);
};

export default Navigation;
