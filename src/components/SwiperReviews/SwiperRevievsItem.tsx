import Image from "next/image";
import s from "./SwiperReviews.module.css";

interface ReviewData {
	text: string;
	img: string;
	name: string;
}

const SwiperRevievsItem = ({ data }: { data: ReviewData }) => {
	const { text, img, name } = data;
	return (
		<>
			<div className={s.Swiper__reviews_block}>
				<div className={s.Swiper__reviews_item_head}>
					<ul className={s.Swiper__reviews_list_star}>
						{[...Array(5)].map((_, index) => (
							<li key={index} className={s.Swiper__reviews_item_star}>
								<svg className={s.Swiper__reviews_list_star_icon}>
									<use href="/symbol-defs.svg#icon-star"></use>
								</svg>
							</li>
						))}
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
					{/* <img src={img} alt="men1" /> */}
					<Image
						src={img}
						alt="men1"
						width={100}
						height={100}
						className={s.avatar}
					/>
				</div>
				<h3 className={s.Swiper__reviews_title}>{name}</h3>
			</div>
		</>
	);
};

export default SwiperRevievsItem;
