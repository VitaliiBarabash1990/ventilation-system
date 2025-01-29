"use client";

import React from "react";
import SwiperRevievsItem from "./SwiperRevievsItem";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./SwiperReviews.module.css";
import Data from "./Data.json";

const SwiperReviews = () => {
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
