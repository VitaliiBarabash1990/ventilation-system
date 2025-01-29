"use client";

import React from "react";
import SwiperRevievsItem from "./SwiperRevievsItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./SwiperReviews.module.css";

const SwiperReviews = () => {
	const Data = [
		{
			text: "Замовляли монтаж системи вентиляції для нашого офісу, і результат перевершив очікування! Команда працювала швидко, професійно і дуже акуратно. Особлива подяка за консультацію – допомогли підібрати оптимальне рішення для нашого приміщення. Рекомендую!",
			img: "/img/Profile-Icon.png",
			name: "Віктор",
		},
		{
			text: "Зверталась для встановлення кондиціонера в квартирі. Роботи виконали на найвищому рівні: все встановлено акуратно, без зайвого шуму чи пилу. Дуже приємно працювати з професіоналами, які цінують свій час і клієнтів. Залишилась дуже задоволена!",
			img: "/img/Profile-Icon-2.png",
			name: "Катерина",
		},
		{
			text: "Компанія встановлювала вентиляцію та кондиціонування у нашому приватному будинку. Бригада ввічлива, технічно підкована, дотримувалась термінів. Тепер у нас вдома завжди свіже повітря і комфортна температура. Щиро дякую за якісну роботу!",
			img: "/img/Profile-Icon-3.png",
			name: "Сергій",
		},
		{
			text: "Компанія встановлювала вентиляцію та кондиціонування у нашому приватному будинку. Бригада ввічлива.",
			img: "./img/Profile-Icon.png",
			name: "Сергій",
		},
	];

	return (
		<Swiper
			className={s.Swiper__swiper}
			spaceBetween={0}
			slidesPerGroup={1}
			pagination={{ clickable: true }}
			modules={[Pagination]}
			loop={true}
			breakpoints={{
				320: { slidesPerView: 1 },
				768: { slidesPerView: 2 },
				1280: { slidesPerView: 3 },
			}}
		>
			{Data.map((review, index) => (
				<SwiperSlide key={index} className={s.Swiper__reviews_slide}>
					<div className={s.Swiper__reviews_item}>
						<SwiperRevievsItem data={review} />
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default SwiperReviews;
