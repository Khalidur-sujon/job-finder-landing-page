import CustomButton from "@/app/components/CustomButton";
import CustomCard from "@/app/components/CustomCard";
import { jobSearchFeaturesContents } from "@/data";
import React from "react";

const JobSearchFeatures = () => {
	return (
		<section className="px-[24px] lg:px-[48px] py-[20px] lg:py-[40px]">
			<div className="flex flex-col gap-[32px]">
				<div className="px-[31px] flex flex-col gap-[16px] items-center justify-center">
					<h3 className="max-w-[420px] font-semibold xs:text-[30px] sm:text-[35px] text-[48px] text-primary-white xs:text-center sm:text-center">
						Spend less time <br /> looking for work
					</h3>
					<p className="maw-w-[358px] text-[12px] md:text-[14px] lg:text-[16px] font-normal text-secondary-white text-center">
						We'll help you through the hardest part of <br /> your
						job search.
					</p>
					<CustomButton text="Create an Account" />
				</div>
				{/* JOB SEARCH FEATURES */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] xs:gap-[20px] sm:gap-[24px] xs:place-items-center  sm:place-items-center">
					{jobSearchFeaturesContents.map((feature) => (
						<CustomCard key={feature.id} {...feature} />
					))}
				</div>
			</div>
		</section>
	);
};

export default JobSearchFeatures;
