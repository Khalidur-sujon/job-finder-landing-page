import React from "react";

const CustomCard = ({ icon, title, description }) => {
	return (
		<div className="p-[24px] sm:p-[20px] bg-secondary-black-light rounded-xl sm:max-w-[400px]">
			<div className="flex flex-col gap-[16px] xs:gap-[12px] xs:items-center xs:justify-center sm:items-center sm:justify-center">
				<img src={icon} alt="icon" className="w-[24px] h-[24px]" />
				<h3 className="text-[16px] font-semibold text-primary-white ">
					{title}
				</h3>
				<p className="text-[16px] font-normal text-secondary-white max-w-[313px] xs:text-center ">
					{description}
				</p>
			</div>
		</div>
	);
};

export default CustomCard;
