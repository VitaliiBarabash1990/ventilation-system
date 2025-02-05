import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import s from "./Modal.module.css";

type ModalProps = {
	children: React.ReactNode;
	close: () => void;
};

const Modal = ({ children, close }: ModalProps) => {
	const [modalRoot, setModalRoot] = useState<HTMLElement | null>(null);

	useEffect(() => {
		const root = document.querySelector("#modal-root") as HTMLElement | null;
		setModalRoot(root);
	}, []);

	if (!modalRoot) {
		return null; // Пока modalRoot не найден, ничего не рендерим
	}

	return ReactDOM.createPortal(
		<div className={s.wrapper}>
			<div className={s.content}>
				<button className={s.closeBtn} onClick={close}>
					<svg className={s.closeBtn_icon}>
						<use href="./symbol-defs.svg#icon-close"></use>
					</svg>
				</button>
				{children}
			</div>
		</div>,
		modalRoot
	);
};

export default Modal;
