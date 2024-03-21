import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FooterNew from "./components/footer-new";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Motion-U Club Official Website",
	description: "This is Motion-U Club Official Website",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} overflow-x-hidden relative max-w-[100vw]`}
			>
				<Header />
				{children}
				{/* <Footer /> */}
				<FooterNew />
			</body>
		</html>
	);
}
