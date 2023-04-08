import BlogesDiv from "../BlogesDiv/BlogesDiv";
import CoupenCard from "../CoupenCard/CoupenCard";
import DashBoardIndicator from "../DashBoardIndicator/DashBoardIndicator";
import "./BlogDashBoard.scss";

import React from "react";

import BlogImg from "../../../images/blog.jpg";

const IndicatorData = [
	"DashBoard",
	"Blogs",
	"Unlocking Success: Proven Strategies to Boost Your Chance of Landing an Application Engineer Role.",
];
const blogData = {
	desc: `In 2013, Richard Betts called the police because someone online threatened to string him up with piano wire. The threat happened after Betts, a climate scientist at the University of Exeter, UK, tweeted about the rising temperatures the world would experience the following year. This wasn’t the first time someone had responded negatively to his comments about climate change, nor would it be the last. And Betts isn’t alone.\n
    A survey by the international non-governmental organization Global Witness hints at the extent of online abuse faced by scientists working on climate topics worldwide, some of which takes a toll on their work or well-being.\n
    The organization contacted thousands of researchers doing climate-related work. Among the 468 respondents, 39% said they have experienced online harassment or abuse related to their climate research. Many respondents reported anxiety, sleeping problems or a loss of productivity (see ‘Impacts of abuse’)`,
	date: `22 Oct 22, 12:00 PM`,
};
const length = blogData.desc.split("\n")?.length;

function BlogDashBoard() {
	return (
		<div className={`blog-dashboard`}>

			{/* ---[ Inner Width ( 1200+ ) ]--- */}
			<div className={`blog-inner-width`}>

				{/* ---[ Left Side Blog ( Blog full Info ) ]--- */}
				<div className={`left`}>
					<div className={`blog-title-div`}>
						{`Unlocking Success: Proven Strategies to Boost Your Chance of Landing an Application Engineer Role.`}
					</div>
					<DashBoardIndicator datas={IndicatorData} />
					<div className={`full-blog-div`}>
						<img src={BlogImg} />
						<div className={`blog-description`}>
							<span>{blogData.desc}</span>
						</div>
						<div className={`blog-date`}>{blogData.date}</div>
					</div>
				</div>

				{/* ---[ Right Side Blog ( Suggested or Recommended Blogs ) ]--- */}
				<div className="right">
					<div className="blog-div">
						<div className={`blog-title-div`}>
							<div className="title-div">
								<span>Recruitr Blogs</span>
							</div>
							<div className={`blogs-div`}>
								<BlogesDiv />
								<BlogesDiv />
								<BlogesDiv />
								<BlogesDiv />
								<BlogesDiv />
							</div>
						</div>
					</div>

					<div className="title-div">
						<span>Recommended Subscription Plan</span>
					</div>

					{/* ---[ Coupend Card with Some Data Passing to Managing Color and Text ]--- */}
					<CoupenCard
						data={{
							intro: `Hey Pawan Kumar, we would like to Recommend you a Plan
					so that you also get on the way of Success...`,
							title: "Recruitr Gold Candidate",
							check: false,
							btnName: "Coupen Applied",
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default BlogDashBoard;
