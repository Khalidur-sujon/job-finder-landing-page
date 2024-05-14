import React from "react";

const CustomButton = ({ text, hasBackgroundColor, borderColor }) => {
	return (
		<button
			className={`lg:px-[32px] md:px-[24px] px-[12px] lg:py-[12px] md:py-[8px] py-[4px] md:text-[16px]  text-[14px] font-semibold border-2 ${
				borderColor === "black"
					? "border-primary-black"
					: "border-primary-green"
			} rounded-full ${
				hasBackgroundColor === "yes"
					? "bg-primary-green text-primary-black"
					: "bg-transparent text-white"
			}`}
		>
			{text}
		</button>
	);
};

export default CustomButton;
