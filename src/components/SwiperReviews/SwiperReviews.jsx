"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./SwiperReviews.module.css";

const SwiperReviews = () => {
	return (
		<>
			<Swiper
				className={s.Swiper__swiper}
				spaceBetween={15}
				slidesPerGroup={1}
				pagination={{ clickable: true }}
				modules={[Pagination]}
				loop={false}
				breakpoints={{
					320: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1280: {
						slidesPerView: 3,
					},
				}}
			>
				<SwiperSlide className={s.Swiper__reviews_slide}>
					<div className={s.Swiper__reviews_item}>
						<div className={s.Swiper__reviews_item_head}>
							<ul className={s.Swiper__reviews_list_star}>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
							</ul>
							<svg className={s.Swiper__reviews_item_head_G}>
								<use href="/symbol-defs.svg#icon-google_logo"></use>
							</svg>
						</div>

						<svg className={s.Swiper__reviews_bloquote}>
							<use href="/symbol-defs.svg#icon-quote"></use>
						</svg>

						<p className={s.Swiper__reviews_text}>
							Замовляли монтаж системи вентиляції для нашого офісу, і результат
							перевершив очікування! Команда працювала швидко, професійно і дуже
							акуратно. Особлива подяка за консультацію – допомогли підібрати
							оптимальне рішення для нашого приміщення. Рекомендую!
						</p>

						<div className={s.Swiper__reviews_client}>
							<div className={s.Swiper__reviews_client_overflov}>
								<img src="./img/Profile-Icon-1-x2.png" alt="men1" />
							</div>
							<h3 className={s.Swiper__reviews_title}>Віктор</h3>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.Swiper__reviews_slide}>
					<div className={s.Swiper__reviews_item}>
						<div className={s.Swiper__reviews_item_head}>
							<ul className={s.Swiper__reviews_list_star}>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
							</ul>
							<svg className={s.Swiper__reviews_item_head_G}>
								<use href="/symbol-defs.svg#icon-google_logo"></use>
							</svg>
						</div>

						<svg className={s.Swiper__reviews_bloquote}>
							<use href="/symbol-defs.svg#icon-quote"></use>
						</svg>

						<p className={s.Swiper__reviews_text}>
							Зверталась для встановлення кондиціонера в квартирі. Роботи
							виконали на найвищому рівні: все встановлено акуратно, без зайвого
							шуму чи пилу. Дуже приємно працювати з професіоналами, які цінують
							свій час і клієнтів. Залишилась дуже задоволена!
						</p>

						<div className={s.Swiper__reviews_client}>
							<div className={s.Swiper__reviews_client_overflov}>
								<img src="./img/Profile-Icon-2-x2.png" alt="men2" />
							</div>
							<h3 className={s.Swiper__reviews_title}>Катерина</h3>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.Swiper__reviews_slide}>
					<div className={s.Swiper__reviews_item}>
						<div className={s.Swiper__reviews_item_head}>
							<ul className={s.Swiper__reviews_list_star}>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
								<li className={s.Swiper__reviews_item_star}>
									<svg className={s.Swiper__reviews_list_star_icon}>
										<use href="/symbol-defs.svg#icon-star"></use>
									</svg>
								</li>
							</ul>
							<svg className={s.Swiper__reviews_item_head_G}>
								<use href="/symbol-defs.svg#icon-google_logo"></use>
							</svg>
						</div>

						<svg className={s.Swiper__reviews_bloquote}>
							<use href="/symbol-defs.svg#icon-quote"></use>
						</svg>

						<p className={s.Swiper__reviews_text}>
							Компанія встановлювала вентиляцію та кондиціонування у нашому
							приватному будинку. Бригада ввічлива, технічно підкована,
							дотримувалась термінів. Тепер у нас вдома завжди свіже повітря і
							комфортна температура. Щиро дякую за якісну роботу!
						</p>

						<div className={s.Swiper__reviews_client}>
							<div className={s.Swiper__reviews_client_overflov}>
								<img src="./img/Profile-Icon-3-x2.png" alt="men1" />
							</div>
							<h3 className={s.Swiper__reviews_title}>Сергій</h3>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide className={s.Swiper__reviews_slide}>
					<div className={s.Swiper__reviews_item}>Slide 4</div>
				</SwiperSlide>
				<SwiperSlide className={s.Swiper__reviews_slide}>
					<div className={s.Swiper__reviews_item}>Slide 5</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default SwiperReviews;
