import "./ExploreJobs.scss";

import React, { useState } from "react";

import JobFrame from "../JobFrame/JobFrame";

import { recc2, options } from "../../../datas";
import BlogesDiv from "../BlogesDiv/BlogesDiv";
import CoupenCard from "../CoupenCard/CoupenCard";

function ExploreJobs() {
	return (
		<div className={`explore-dashboard`}>
			<div className={`inner-width`}>
				<div className={`dashboard-title`}>Dashboard</div>
				<div className={`explore-dashboard-div`}>
					<div className={`left-div`}>
						<div className={`title-div`}>
							<span>Explore Jobs</span>
							<button>View All</button>
						</div>

						<div className={`selection-div`}>
							{options.map((items, index) => {
								return (
									<SelectDiv
										data={items}
										key={"select_" + index}
									/>
								);
							})}
						</div>
						<div className={`explore-job-div`}>
							{recc2?.map((items, index) => {
								return (
									<JobFrame
										datas={items}
										key={items.title + "_" + index}
									/>
								);
							})}
						</div>
					</div>

					<div className={`right-div`}>
						<div className={`title-div`}>
							<span>Recommended Subscription Plan</span>
						</div>

						<CoupenCard
							data={{
								intro: `Hey Pawan Kumar, we would like to Recommend you a Plan
					so that you also get on the way of Success...`,
								title: "Recruitr Gold Candidate",
								check: false,
								btnName: "Coupen Applied",
							}}
						/>

						<div className={`blog-div`}>
							<div className="title-div">
								<span>Recruitr Blogs</span>
							</div>
							<div className={`blogs-div`}>
								<BlogesDiv />
								<BlogesDiv />
								<BlogesDiv />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export const SelectDiv = ({ data }) => {
	return (
		<div className={`select-div`}>
			<select>
				{data.map((items, index) => {
					return (
						<option
							key={items.value + "_" + index}
							value={items.value}
						>
							{items.name}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default ExploreJobs;
