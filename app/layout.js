import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Job Finder ",
	description: "Landing Page - Job Finder",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} min-w-[483px]`}>
				{children}
			</body>
		</html>
	);
}
