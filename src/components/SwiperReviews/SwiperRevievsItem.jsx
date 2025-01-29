import s from "./SwiperReviews.module.css";

const SwiperRevievsItem = ({ data }) => {
	const { text, img, name } = data;
	return (
		<>
			<div className={s.Swiper__reviews_block}>
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
				<p className={s.Swiper__reviews_text}>{text}</p>
			</div>
			<div className={s.Swiper__reviews_client}>
				<div className={s.Swiper__reviews_client_overflov}>
					<img src={img} alt="men1" />
				</div>
				<h3 className={s.Swiper__reviews_title}>{name}</h3>
			</div>
		</>
	);
};

export default SwiperRevievsItem;
