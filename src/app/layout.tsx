import type { Metadata } from "next";

import "./globals.css";
import BaseLayout from "@/components/BaseLayout/BaseLayout";

export const metadata: Metadata = {
	title: "Ventilation system",
	description: "Installation of ventilation and air conditioning systems",
	icons: {
		icon: "/ventilation.png",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <BaseLayout>{children}</BaseLayout>;
}
