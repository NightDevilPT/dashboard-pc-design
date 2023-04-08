import "./CoupenCard.scss";

import React from "react";
import coupenImg from "../../../images/job.png";

function CoupenCard({ data }) {
	return (
		<div className={`coupen-div`}>
			{data?.intro ? (
				<div className={`coupen-intro`}>
					{
						data.intro
					}
				</div>
			) : (
				""
			)}
			<div
				className={`coupen-card`}
				style={{ border: data.color ? "1px solid #fbbc05" : "" }}
			>
				{!data.check ? (
					<div
						className={`recommend-text`}
						style={{ backgroundColor: data.color ? "#fbbc05" : "" }}
					>
						Recommend
					</div>
				) : (
					<input
						className={`active-radio-btn`}
						type="radio"
						checked={data.check}
					/>
				)}
				<div
					className={`coupen-details`}
					style={{ left: data.check ? "50px" : "30px" }}
				>
					<div className={`coupen-title`}>{data.title}</div>
					<div className={`coupen-info`}>
						<span>Free</span>
						<span>₹200</span>
						<button
							style={{
								backgroundColor: data.color ? "#fbbc05" : "",
							}}
						>
							{data.btnName}
						</button>
					</div>
					<div
						className={`coupen-info2`}
						style={{
							width: data.check ? "90%" : "100%",
							color: data.color ? "#fbbc05" : "",
						}}
					>
						3 Months Plan | Only Freshers Candidate | Unlimited Job
						Applying
					</div>
				</div>
				<img src={coupenImg} />
			</div>
		</div>
	);
}

export default CoupenCard;
