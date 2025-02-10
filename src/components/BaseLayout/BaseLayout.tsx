import { ReactNode } from "react";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

type Props = {
	children: ReactNode;
};

export default async function BaseLayout({ children }: Props) {
	return (
		<html className="h-full" lang="ua">
			<body className="flex h-full flex-col">
				<Navigation />
				<main>{children}</main>
				<Footer />
				<div id="modal-root"></div>
			</body>
		</html>
	);
}
