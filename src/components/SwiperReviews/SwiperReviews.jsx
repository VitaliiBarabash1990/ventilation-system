"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperReviews = () => {
	return (
		<>
			<Swiper
				spaceBetween={30} // Расстояние между слайдами
				slidesPerView={3} // Отображать 3 слайда одновременно
				slidesPerGroup={1} // Прокручивать по одному слайду
				navigation // Включаем кнопки "вперед-назад"
				pagination={{ clickable: true }} // Включаем пагинацию
				modules={[Navigation, Pagination]} // Подключаем модули
				loop={true} // Цикличный скролл
			>
				<SwiperSlide>
					<div
						style={{
							background: "red",
							height: "200px",
							width: "200px",
							color: "white",
						}}
					>
						Slide 1
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							background: "blue",
							height: "200px",
							width: "200px",
							color: "white",
						}}
					>
						Slide 2
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							background: "green",
							height: "200px",
							width: "200px",
							color: "white",
						}}
					>
						Slide 3
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							background: "yellow",
							height: "200px",
							width: "200px",
							color: "black",
						}}
					>
						Slide 4
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div
						style={{
							background: "purple",
							height: "200px",
							width: "200px",
							color: "white",
						}}
					>
						Slide 5
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default SwiperReviews;
