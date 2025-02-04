"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./OurWorks.module.css";
import imgs from "./imgs.json";

const CustomSwiper = () => {
	return (
		<div id="OurWorks" className={`section ${s.OurWorks__section}`}>
			<div className="container">
				<h2 className={s.OurWorks__section_title}>Наші роботи</h2>
				<div className={s.sliderContainer}>
					<Swiper
						className={s.swiper}
						// spaceBetween={20}
						// slidesPerView={1}
						pagination={{ clickable: true }}
						navigation={{
							nextEl: ".custom-next",
							prevEl: ".custom-prev",
						}}
						modules={[Pagination, Navigation]}
						loop={true}
						breakpoints={{
							320: { slidesPerView: 1, spaceBetween: 16 },
							768: { slidesPerView: 2, spaceBetween: 16 },
							1280: { slidesPerView: 3, spaceBetween: 16 },
						}}
					>
						{imgs.map((img, index) => (
							<SwiperSlide key={index} className={s.slide}>
								<div className={s.reviewCard}>
									<picture>
										<source srcSet={img.img1x} type="image/jpeg" />
										<img src={img.img2x} alt="workers" className={s.photo} />
									</picture>
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
			</div>
		</div>
	);
};

export default CustomSwiper;
