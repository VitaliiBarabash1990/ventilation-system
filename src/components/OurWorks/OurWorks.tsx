"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import s from "./OurWorks.module.css";
import imgs from "./imgs.json";

const OurWorks = () => {
	return (
		<div className={`section ${s.OurWorks__section}`}>
			<div className="container">
				<h2 className={s.OurWorks__section_title}>Наші роботи</h2>

				<Swiper
					className={s.Swiper__swiper}
					spaceBetween={0}
					slidesPerGroup={1}
					pagination={{ clickable: true }}
					modules={[Pagination]}
					loop={false}
					breakpoints={{
						320: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1280: { slidesPerView: 3 },
					}}
				>
					{imgs.map((img, index) => (
						<SwiperSlide key={index} className={s.OurWorks__reviews_slide}>
							<picture>
								<source srcSet={img.img1x} type="image/jpeg" />
								<img src={img.img2x} alt="workers" />
							</picture>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default OurWorks;

{
	/* <source
						srcSet="/img/image1_x1.png 1x, /img/image1_x2.png 2x"
						type="image/jpeg"
					/> */
}
