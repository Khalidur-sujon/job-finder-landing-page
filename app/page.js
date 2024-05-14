import React from "react";
import Navbar from "./components/Navbar";
import {
	About,
	AiOptimize,
	Footer,
	Hero,
	JobSearchFeatures,
	ResumeDesign,
} from "@/sections";

const page = () => {
	return (
		<div>
			<div className="bg-primary-black">
				<Navbar />
				<Hero />
				<About />
				<JobSearchFeatures />
			</div>

			<div className="bg-primary-green">
				<AiOptimize />
			</div>
			<div className="bg-primary-black">
				<ResumeDesign />
			</div>
			<div className="bg-primary-green">
				<Footer />
			</div>
		</div>
	);
};

export default page;
