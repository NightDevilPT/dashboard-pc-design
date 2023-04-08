import "./BlogesDiv.scss";

import React from "react";

import blogImg from "../../../images/blog.jpg";

function BlogesDiv() {
	return (
		<div className={`blogger-data-div`}>
			<img src={blogImg} />
			<div className={`blog-data`}>
				<div className={`blog-title`}>
					{`Unlocking Success: Proven Strategies to Boost Your Chance of Landing an Application Engineer Role.`}
				</div>
                <div className="blog-day-info">
                    {`4 days ago`}
                </div>
			</div>
		</div>
	);
}

export default BlogesDiv;
