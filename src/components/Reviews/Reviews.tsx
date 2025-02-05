import s from "./Reviews.module.css";
import CustomSwiper from "../CustomSwiper/CustomSwiper";

const Reviews = () => {
	return (
		<div id="Reviews" className={`section ${s.Reviews__section}`}>
			<div className="container">
				<h2 className={s.Reviews__section_title}>Відгуки</h2>
				<CustomSwiper />
			</div>
		</div>
	);
};

export default Reviews;
