import React from "react";

import CustomButton from "@/app/components/CustomButton";
import CustomCard from "@/app/components/CustomCard";
import { heroFeatures } from "@/data";

const Hero = () => {
	return (
		<section className="px-[40px] lg:px-[80.5px] mb-[30px] lg:mb-[60px]">
			<div className="flex flex-col gap-[56px] justify-center items-center">
				<div className="px-[20px] md:px-[30.4px] lg:px-[60.5px] ">
					{/* TEXT CONTEXT  */}
					<div className="flex flex-col   gap-[20px] items-center justify-center">
						<h1 className="font-extrabold text-[38px] sm:text-[50px] md:text-[65px] lg:text-[88px] text-white text-center">
							<span className="text-primary-green">
								Win your dream job
							</span>{" "}
							<br />
							with PostJob
						</h1>
						<p className="font-normal text-[14px] md:text-[16px] text-secondary-white max-w-[474px]">
							Submit better job app — 10x faster. AI cover letter
							generator, resume keyword checker, outreach message
							writer, and more. Powered by GPT
						</p>

						{/* Email Input */}
						<div className="px-[8px] md:px-[12px] lg:px-[16px] py-[4px] md:py-[6px] lg:py-[8px] flex border-2 border-primary-white justify-between rounded-full">
							<input
								type="email"
								placeholder="Enter Email"
								className="border-none outline-none bg-transparent text-secondary-white"
							/>
							<CustomButton
								text="Start For Free"
								hasBackgroundColor="yes"
							/>
						</div>
					</div>
				</div>
				{/* HERO FEATURES */}
				<div className="text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] md:gap-[28px]">
					{heroFeatures.map((feature) => (
						<CustomCard key={feature.id} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Hero;
