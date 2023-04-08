import "./HomeDashBoard.scss";

import React from "react";

import jobImage from "../../../images/job.png";

import { IoIosArrowForward } from "react-icons/io";
import { HiOutlineBriefcase } from "react-icons/hi";
import { FiUserMinus, FiUserPlus } from "react-icons/fi";
import { BiBriefcase, BiUserPin } from "react-icons/bi";
import { BsBriefcase } from "react-icons/bs";

import JobFrame from "../JobFrame/JobFrame";

import { appliedJobs, recc} from "../../../datas";

function HomeDashBoard() {
	

	return (
		<div className={`home-dashboard`}>
			<div className={`inner-width`}>
				<div className={`dashboard-title`}>Dashboard</div>

				<div className={`dashboard-status-div`}>
					<div className={`applied-job-div`}>
						<div className={`title-div`}>
							<span>Applied Jobs</span>
							<button>View all</button>
						</div>

						<div className={`jobs-div`}>
							{appliedJobs.map((items, index) => {
								return (
									<div
										className={`applied-jobs-frame`}
										key={items.title + "_" + index}
									>
										<div className={`job-user-div`}>
											<img src={items.img} />

											<div
												className={`job-user-data-div`}
											>
												<div className={`title`}>
													{items.title}
												</div>
												<div className={`subtitle`}>
													{items.subtitle}
												</div>
												<button>{items.button}</button>
											</div>
										</div>
										<IoIosArrowForward
											className={`job-user-icon`}
										/>
									</div>
								);
							})}
						</div>
					</div>

					<div className={`application-status-div`}>
						<div className={`title-div`}>
							<span>Applications Status</span>
						</div>

						<div className={`status-div`}>
							<div
								className={`status-frame`}
								style={{ borderTopLeftRadius: "10px" }}
							>
								<BsBriefcase className={`status-icon`} />
								<div className={`status-count`}>23</div>
								<div className={`status-text`}>
									Total
									<br />
									Jobs Applied
								</div>
							</div>
							<div
								className={`status-frame`}
								style={{ borderTopRightRadius: "10px" }}
							>
								<BiUserPin className={`status-icon`} />
								<div className={`status-count`}>12</div>
								<div className={`status-text`}>
									Applied
									<br />
									Under Review
								</div>
							</div>
							<div
								className={`status-frame`}
								style={{ borderBottomLeftRadius: "10px" }}
							>
								<FiUserPlus className={`status-icon`} />
								<div className={`status-count`}>09</div>
								<div className={`status-text`}>
									Total
									<br />
									Application Accepted
								</div>
							</div>
							<div
								className={`status-frame`}
								style={{ borderBottomRightRadius: "10px" }}
							>
								<FiUserMinus className={`status-icon`} />
								<div className={`status-count`}>09</div>
								<div className={`status-text`}>
									Total
									<br />
									Application Rejected
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className={`job-recommendation-div`}>
					<div className={`title-div`}>
						<span>Jobs Recommendations</span>
						<button>View all</button>
					</div>
					<div className={`job-recommendation-frame`}>
						{
							recc?.map((items,index)=>{
								return(
									<JobFrame datas={items} key={items.title+"_"+index} />
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeDashBoard;
