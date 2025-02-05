"use client";
import Link from "next/link";
import s from "./Navigation.module.css";
import BurgerButton from "@/components/UI/BurgerButton/BurgerButton";
import { useState } from "react";
import { NavigationMob } from "../NavigationMob/NavigationMob";

const Navigation = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const isModal = true;
	console.log("Open", menuOpen);
	return (
		<div className={`container ${s.Navigation__container}`}>
			<nav className={s.Navigation__container_wrap}>
				<ul className={s.Navigation__container_nav_list}>
					<li className={s.Navigation__container_nav_item}>
						<Link href="/">
							<svg className={s.Navigation__container_logo}>
								<title>button_errow</title>
								<image
									href="/Logo.svg"
									x="0"
									y="0"
									className={s.Navigation__logo}
								/>
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
							<Link href="tel:+380935482200">+380 (93) 548-22-00</Link>
						</li>
						<li className={s.Navigation__container_address_item}>
							<svg className={s.Navigation__container_address_icon}>
								<use href="/symbol-defs.svg#icon-email"></use>
							</svg>
							<Link href="mailto:VentilationKyiv@ukr.net">
								VentilationKyiv@ukr.net
							</Link>
						</li>
					</ul>
				</address>
			</nav>

			<nav className={s.Navigation__mob}>
				<ul className={s.Navigation__mob_menu}>
					<li>
						<Link href="/">
							<svg className={s.Navigation__mob_logo}>
								<title>button_errow</title>
								<image
									href="/Logo.svg"
									x="0"
									y="0"
									className={s.Navigation__logo}
								/>
							</svg>
						</Link>
					</li>
					<li>
						<div className={s.headerBurgerButton}>
							<BurgerButton menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
						</div>
					</li>
				</ul>
			</nav>
			<div className={`${s.menu_burger} ${menuOpen ? s.open : ""}`}>
				<NavigationMob isModal={isModal} setMenuOpen={setMenuOpen} />
			</div>
		</div>
	);
};

export default Navigation;
