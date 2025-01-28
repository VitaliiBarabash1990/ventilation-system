import s from "./Reviews.module.css";
import SwiperReviews from "../SwiperReviews/SwiperReviews";

const Reviews = () => {
	return (
		<div className={`section ${s.Reviews__section}`}>
			<div className="container">
				<h2>Reviews</h2>
				<SwiperReviews />
			</div>
		</div>
	);
};

export default Reviews;
