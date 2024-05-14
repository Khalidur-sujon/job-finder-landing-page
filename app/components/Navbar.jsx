"use client";

import React, { useState } from "react";

import CustomButton from "./CustomButton";

const Navbar = () => {
	const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

	return (
		<nav className="sectionPadding">
			<div className="flex justify-between items-center">
				<div className="flex gap-[40px] items-center">
					{/* LOGO */}
					<img src="/Logo.png" alt="logo icon" />
					{/* MENU ITEMS */}
					<div className=" hidden lg:flex  font-normal text-[16px]  md:gap-[24px] text-white">
						<p className="cursor-pointer hover:text-primary-green">
							AI Cover Letter Generator
						</p>
						<p className="cursor-pointer hover:text-primary-green">
							Resume Template
						</p>
						<p className="cursor-pointer hover:text-primary-green">
							Pricing
						</p>
					</div>
					{/* MOBILE MENU */}
					<div
						className="flex flex-col gap-[4px] border-2 border-primary-green p-1 rounded-full cursor-pointer lg:hidden relative"
						onClickCapture={() =>
							setIsMobileMenuActive(!isMobileMenuActive)
						}
					>
						<div className="h-[1px] w-[13px] bg-primary-green"></div>
						<div className="h-[1px] w-[13px] bg-primary-green"></div>
						<div className="h-[1px] w-[13px] bg-primary-green"></div>
						{isMobileMenuActive && (
							<div className=" absolute -left-[50%]  ">
								<div className="w-[250px] h-[250px]  rounded-xl overflow-hidden relative ">
									<img
										src="/Overlay.png"
										alt="overlay image"
										className="absolute w-full h-full "
									/>
									<div className="absolute w-full h-full  text-center flex flex-col gap-[8px] justify-center ">
										<p className="font-semibold text-primary-white hover:text-primary-green  py-2 hover:bg-primary-black cursor-pointer border-[0.5px] border-secondary-white/10 transition duration-200">
											AI Cover Letter Generator
										</p>
										<p className="font-semibold text-primary-white hover:text-primary-green  py-2 hover:bg-primary-black cursor-pointer border-[0.5px] border-secondary-white/10 transition duration-200">
											Resume Template
										</p>
										<p className="font-semibold text-primary-white hover:text-primary-green  py-2 hover:bg-primary-black cursor-pointer border-[0.5px] border-secondary-white/10 transition duration-200">
											Pricing
										</p>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
				{/* BUTTONS */}
				<div className="flex gap-[16px]">
					<CustomButton text="Sign In" />
					<CustomButton text="Get Started" hasBackgroundColor="yes" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
