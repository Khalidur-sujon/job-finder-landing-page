import CustomButton from "@/app/components/CustomButton";
import React from "react";

const ResumeDesign = () => {
	return (
		<section className="px-[40px] lg:px-[75px] lg:py-[40px] py-[20px]">
			<div className="flex flex-col lg:flex-row gap-[20px] md:gap-[30px] lg:gap-[40px] items-center justify-center lg:justify-between ">
				<div className=" flex flex-col gap-[24px] max-w-[456px] justify-start items-start max-sm:justify-center max-sm:items-center">
					<h2 className="font-semibold text-[48px] text-primary-white max-sm:text-center max-sm:leading-tight">
						{" "}
						Free resume design templates
					</h2>
					<p className="font-normal text-[16px] text-secondary-white max-sm:text-center">
						{" "}
						By following these design tips, you can create a
						professional and effective resume that will help you
						stand out to recruiters and hiring managers.
					</p>
					<CustomButton
						text="Create an Account"
						hasBackgroundColor="yes"
					/>
				</div>
				<div className="flex 1">
					<img
						src="/Illustration-4.png"
						alt="Illustration image"
						className="max-w-[440px] lg:max-w-[500px] h-[440px] lg:h-[500px]"
					/>
				</div>
			</div>
		</section>
	);
};

export default ResumeDesign;
