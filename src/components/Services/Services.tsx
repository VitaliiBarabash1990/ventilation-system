import Accord from "../Accord/Accord";
import s from "./Services.module.css";

const Services = () => {
	return (
		<div className={`section ${s.Services__section}`}>
			<div className="container">
				<div className={s.Services__section_wraper}>
					<h2 className={s.Services__section_title}>Наші послуги</h2>
					<Accord />
				</div>
			</div>
		</div>
	);
};

export default Services;
