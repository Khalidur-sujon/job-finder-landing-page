import CustomButton from "@/app/components/CustomButton";
import React from "react";

const AiOptimize = () => {
	return (
		<section className="px-[40px] lg:px-[75px] py-[40px] lg:py-[40px]">
			{/* SECTION-1 */}
			<div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[40px] items-center justify-center lg:justify-between">
				<div className="text-primary-black flex flex-col gap-[18px] md:gap-[24px] max-w-[456px] justify-start items-start max-sm:justify-center max-sm:items-center">
					<h2 className="font-semibold text-[48px] max-sm:text-center max-sm:leading-tight">
						{" "}
						Free AI cover letter generator powered by GPT
					</h2>
					<p className="font-normal text-[16px] max-sm:text-center">
						{" "}
						A free AI cover letter generator powered by GPT is a
						tool that uses artificial intelligence and natural
						language processing to help job seekers create
						customized and effective cover letters.
					</p>
					<CustomButton
						text="Try For Free Now"
						hasBackgroundColor="yes"
						borderColor="black"
					/>
				</div>
				<div className="flex 1">
					<img
						src="/Illustration.png"
						alt="Illustration image"
						className="max-w-[450px] md:max-w-[500px] max-h-[450px] md:max-h-[500px]"
					/>
				</div>
			</div>
			{/* SECTION-2 */}
			<div className="flex  flex-col-reverse  lg:flex-row gap-[20px] md:gap-[40px] justify-center items-center lg:justify-between">
				<div className="flex 1">
					<img
						src="/Illustration-2.png"
						alt="Illustration image"
						className="max-w-[450px] md:max-w-[500px] max-h-[450px] md:max-h-[500px]"
					/>
				</div>
				<div className="text-primary-black flex flex-col gap-[24px] max-w-[456px] justify-start items-start max-sm:justify-center max-sm:items-center  ">
					<h2 className="font-semibold text-[48px]  max-sm:text-center max-sm:leading-tight">
						{" "}
						Optimize the keywords in your resume
					</h2>
					<p className="font-normal text-[16px] max-sm:text-center">
						{" "}
						By optimizing keywords in your resume, you can increase
						your chances of getting noticed by recruiters and
						landing interviews for the jobs you want.
					</p>
					<CustomButton
						text="Optimize Your Resume"
						hasBackgroundColor="yes"
						borderColor="black"
					/>
				</div>
			</div>
		</section>
	);
};

export default AiOptimize;
