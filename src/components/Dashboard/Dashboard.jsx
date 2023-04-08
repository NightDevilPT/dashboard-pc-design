import "./Dashboard.scss";

import React from "react";
import HomeDashBoard from "./HomeDashBoard/HomeDashBoard";
import ExploreJobs from "./ExploreJobs/ExploreJobs";
import BlogDashBoard from "./BlogDashBoard/BlogDashBoard";
import ProjectManagerDashBoard from "./ProjectManagerDashBoard/ProjectManagerDashBoard";

function Dashboard() {
	return (
        <div className={`dashboard-div`}>
            <HomeDashBoard />
            <ExploreJobs />
            <BlogDashBoard />
            <ProjectManagerDashBoard />
        </div>
    );
}

export default Dashboard;
