"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import s from "./OurWorks.module.css";
import imgs from "./imgs.json";
import Modal from "../Modal/Modal";
import Image from "next/image";

const CustomSwiper = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [selectedImage, setSelectedImage] = useState<string | undefined>();

	const openModal = (image: string) => {
		setSelectedImage(image);
		setIsOpenModal(true);
	};

	const closeModal = () => {
		setSelectedImage(undefined);
		setIsOpenModal(false);
	};

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
								<div
									className={s.reviewCard}
									onClick={() => openModal(img.img2x)}
								>
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

				{isOpenModal && (
					<Modal close={closeModal}>
						{/* <img
							src={selectedImage}
							alt="selectedImage"
							className={s.modal_image}
						/> */}

						<Image
							src={selectedImage}
							alt="selectedImage"
							width={200}
							height={100}
							className={s.modal_image}
						/>
					</Modal>
				)}
			</div>
		</div>
	);
};

export default CustomSwiper;
