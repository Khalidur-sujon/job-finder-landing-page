import React from "react";

const About = () => {
	return (
		<section className="px-[24px] lg:px-[48px] py-[20px] lg:py-[40px]">
			<div className="bg-primary-green rounded-lg pt-[33px] md:pt-[44px] lg:pt-[56px] overflow-hidden ">
				{/* TEXT CONTENT */}
				<div className="text-primary-black flex flex-col items-center">
					<h3 className="font-semibold text-[24px] md:text-[32px] lg:text-[48px] max-w-[420px]">
						Submit Better job applications
					</h3>
					<h1 className="font-bold text-[80px] md:text-[100px] lg:text-[152px]">
						10x faster
					</h1>
					<p className="font-normal text-[16px]  max-w-[474px] max-md:text-center">
						AI cover letter generator, resume keyword checker,
						outreach message writer, and more. Powered by GPT
					</p>
				</div>
				{/* IMAGE CONTENT */}
				<div className="mt-[12px] px-[57px] relative">
					<img src="/image-9.png" alt="about cover image" />
					<img src="/Overlay.png" className="absolute inset-0" />
				</div>
			</div>
		</section>
	);
};

export default About;
