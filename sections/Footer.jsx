import CustomButton from "@/app/components/CustomButton";
import { footerContent, footerSocial } from "@/data";
import React from "react";

const Footer = () => {
	return (
		<footer className="px-[40px] lg:px-[75px] py-[20px] lg:py-[40px]">
			<div className="w-full mx-auto">
				<div className="flex flex-col gap-[10px] md:gap-[16px] items-center justify-center">
					<h4 className="font-semibold  text-[46px] md:text-[64px] max-sm:text-center">
						What’s next
					</h4>
					<p className="font-normal text-[14px] md:text-[16px] max-w-[456px] text-center max-sm:text-center">
						{" "}
						Submit better job app — 10x faster. AI cover letter
						generator, resume keyword checker, outreach message
						writer, and more. Powered by GPT
					</p>
					<CustomButton
						text="Try For Free"
						hasBackgroundColor="yes"
						borderColor="black"
					/>
				</div>

				<div className="mt-[25px] md:mt-[40px] grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-[35px] md:gap-[48px] lg:gap-[70px] place-content-center ">
					{footerContent.map((content) => (
						<div key={content.id}>
							<h4
								className="font-medium text-[20px] mb-[16px]
						"
							>
								{content.title}
							</h4>
							<div className=" max-w-[280px] flex flex-col gap-[8px]">
								{content?.Items.map((item, index) => (
									<>
										<span
											key={index}
											className="font-normal text-[16px]"
										>
											{item}
										</span>
									</>
								))}
							</div>
						</div>
					))}
					{/* Social Link */}
					<div className="flex flex-col gap-[16px]">
						<h4 className="font-medium text-[20px]">
							{footerSocial.title}
						</h4>
						<span className="max-w-[294px] font-normal text-[16px]">
							{footerSocial.email}
						</span>

						<div className="flex gap-[24px]">
							{footerSocial?.icons.map((icon, index) => (
								<img
									key={index}
									src={icon}
									alt="social icon"
									className="w-[24px] h-[25px]"
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className="h-[1px] bg-secondary-white my-[20px] md:my-[25px] lg:my-[40px]" />
			<p className="text-[14px] md:text-[16px] text-secondary-black text-center">
				© Copywriting | All Rights Reserved | Terms of Use | Privacy
			</p>
		</footer>
	);
};

export default Footer;
