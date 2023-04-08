import CoupenCard from "../CoupenCard/CoupenCard";
import DashBoardIndicator from "../DashBoardIndicator/DashBoardIndicator";
import SubscriptionPlanCarousel from "../SubscriptionPlanCarousel/SubscriptionPlanCarousel";
import "./ProjectManagerDasgBoard.scss";

import React from "react";

import JobImg from "../../../images/google.png";
import videoImg from "../../../images/blog.jpg";

import { AiOutlineShareAlt, AiOutlinePlayCircle } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { BiFileFind, BiTimer, BiUserPin } from "react-icons/bi";
import { WiTime6 } from "react-icons/wi";
import { TbCoins } from "react-icons/tb";
import { HiOutlineBriefcase } from "react-icons/hi";
import { MdMoreTime } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { BsCheck } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";


function ProjectManagerDashBoard() {
	const dashBoardIndicator = ["Recommended Jobs", "Peoject manager"];
	const data = {
		jobTitle: "Project Manager",
		companyImg: JobImg,
		company: "Google",
		applocants: "200",
		vacancy: "3",
		skills: "Figma, US Research, Analysis",
		requirmentType: "Urgent Requirment",
		appliedTime: "Apply by 23rd Jan 23",
		ctc: "₹5 - ₹7 Lakh/annum",
		jobType: "Full-Time",
		fresher: true,
		experince: "3-5 Yrs Experience",
		location: "New York, USA",
		hybridWork: false,
		travelWhileWorking: false,
		educationType: "Graduation",
		education: "B.Tech(Civil)",
		assesmentPhase: "Included",
		benefits: [
			{
				name: "EPF",
				toggle: true,
			},
			{
				name: "Insurance",
				toggle: true,
			},
			{
				name: "ESI",
				toggle: false,
			},
		],
		perks: ["Canteen", "No-Bond"],
		about: `In 2010, a fire broke out in Israel’s Carmel Mountains. Yossi Matias, VP Engineering at Google and Head of Israel R&D Center, could see the fire from an office window but couldn’t find any helpful information about it online. So they shifted gears and got to work on a way to change that. In a matter of a few hours, the small team coordinated with the local government, surfaced the relevant emergency resources, and made them available through Google Search.`,
		videoURL: "",
		videoThumbnail: videoImg,
	};
	return (
		<div className={`project-dashboard`}>
			<div className="inner-width">
				<div className={`project-indicate-div`}>
					<DashBoardIndicator datas={dashBoardIndicator} />
				</div>
				<div className={`bottom-div`}>
					<div className={`left`}>
						<SubscriptionPlanCarousel />
						<div className={`project-coupen-div`}>
							<CoupenCard
								data={{
									title: "Recruitr Gold Candidate",
									color: "yellow",
									check: true,
									btnName: "50% OFF",
								}}
							/>
						</div>
						<button className={`subscription-btn`}>
							Buy Plan Now
						</button>
					</div>

					<div className={`right`}>
						<div className={`title-div`}>
							<span>Job Details</span>
						</div>
						<div className={`job-details-div`}>
							<div className={`job-logo-title-div`}>
								<img
									className={`company-logo`}
									src={data.companyImg}
								/>
								<div className={`title-div`}>
									<span>{data.jobTitle}</span>
									<span>{data.company}</span>
								</div>
							</div>
							<AiOutlineShareAlt className={`share-icon`} />
						</div>

						<div className={`job-frame1`}>
							<div className={`job-info-div`}>
								<FaUsers className={`job-info-icon`} />
								<span>{data.applocants} Applications</span>
							</div>
							<div className={`job-info-div`}>
								<BiFileFind className={`job-info-icon`} />
								<span>{data.vacancy} Vacancy</span>
							</div>
							<div className={`job-info-div`}>
								<BiTimer className={`job-info-icon`} />
								<span className={`alert-color`}>
									{data.requirmentType}
								</span>
							</div>
							<div className={`job-info-div`}>
								<WiTime6 className={`job-info-icon`} />
								<span>{data.appliedTime}</span>
							</div>
							<div className={`job-info-div`}>
								<TbCoins className={`job-info-icon`} />
								<span>{data.ctc}</span>
							</div>
						</div>

						<div className={`job-frame1`}>
							<div className={`subtitle-div`}>
								Experience Requirment :
							</div>

							<div className={`job-info-div`}>
								<HiOutlineBriefcase
									className={`job-info-icon`}
								/>
								<span>{data.jobType}</span>
							</div>
							<div className={`job-info-div`}>
								<BiUserPin className={`job-info-icon`} />
								<span>
									{data.fresher ? "Fresher" : "Experince"}
								</span>
							</div>
							<div className={`job-info-div`}>
								<MdMoreTime className={`job-info-icon`} />
								<span>{data.experince}</span>
							</div>
						</div>

						<div className={`job-frame1`}>
							<div className={`subtitle-div`}>
								Work Location :
							</div>

							<div className={`job-info-div`}>
								<SlLocationPin className={`job-info-icon`} />
								<span>{data.location}</span>
							</div>
							<div className={`job-type2`}>
								<div className={`job-info-div2`}>
									<span>Work From Home/Hybrid</span>:
									<span>
										{data.hybridWork ? "Yes" : "No"}
									</span>
								</div>

								<div className="divider"></div>

								<div className={`job-info-div2`}>
									<span>
										Requires Traveling while Working
									</span>
									:
									<span>
										{data.travelWhileWorking ? "Yes" : "No"}
									</span>
								</div>
							</div>
						</div>

						<div className={`skill-education-div`}>
							<div className={`frames`}>
								Require{" "}
								<span className="black">
									{data.educationType}
								</span>{" "}
								in{" "}
								<span className="black">{data.education}</span>
							</div>
							<div className={`frames`}>
								Require Skills :{" "}
								<span className="black">{data.skills}</span>
							</div>
							<div className={`frames`}>
								Assesment Phase :{" "}
								<span className="highlight">
									{data.assesmentPhase}
								</span>
							</div>
						</div>

						<div className={`tags-frame`}>
							{data.benefits ? (
								<div className="frames">
									Benefits:{" "}
									{data?.benefits?.map((items, index) => {
										return (
											<button
												key={items.name + "_" + index}
											>
												{items.name}

												{items.toggle ? (
													<BsCheck className="tags-icons green" />
												) : (
													<GrFormClose className="tags-icons red" />
												)}
											</button>
										);
									})}
								</div>
							) : (
								""
							)}

							{data.benefits ? (
								<div className="frames">
									Perks:{" "}
									{data?.perks?.map((items, index) => {
										return (
											<button
												key={items + "_" + index}
											>
												{items}
											</button>
										);
									})}
								</div>
							) : (
								""
							)}
						</div>

						<div className={`about-company`}>
							<div className={`about-div`}>
								<div className="subtitle-div">
									<span>About</span>
								</div>
								<div className="description-div">
									<span>{data.about}</span>
								</div>
							</div>
							<div className="video-div">
								<img src={data.videoThumbnail} />
								<AiOutlinePlayCircle className="video-icon" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectManagerDashBoard;
