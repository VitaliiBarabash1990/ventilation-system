"use client";

import React from "react";
import SwiperRevievsItem from "./SwiperRevievsItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./SwiperReviews.module.css";
import Data from "./Data.json";

const SwiperReviews = () => {
	return (
		<div className={s.sliderContainer}>
			<Swiper
				className={s.Swiper__swiper}
				spaceBetween={0}
				slidesPerGroup={1}
				pagination={{ clickable: true }}
				modules={[Pagination, Navigation]}
				navigation={{
					nextEl: ".custom-next",
					prevEl: ".custom-prev",
				}}
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

			<button className={`custom-prev ${s.navButton} ${s.prevButton}`}>
				<svg className={`${s.navButton_icon}`}>
					<use href="/symbol-defs.svg#icon-left_errow"></use>
				</svg>
			</button>
			<button className={`custom-next ${s.navButton} ${s.nextButton}`}>
				<svg className={`${s.navButton_icon} ${s.right}`}>
					<use href="/symbol-defs.svg#icon-left_errow"></use>
				</svg>
			</button>
		</div>
	);
};

export default SwiperReviews;
