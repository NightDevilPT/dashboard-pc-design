import "./Header.scss";

import React, { useContext, useState } from "react";
import { GlobalData } from "../../context/ContextAPI";

import { IoSearchOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import { BiBriefcase, BiBell, BiTrafficCone } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import { TbMessageCircle } from "react-icons/tb";
import { RiArrowDownSFill } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
import { AiOutlineFileAdd } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { FaPlaceOfWorship } from "react-icons/fa";

import user from "../../images/user.jpeg";

function Header() {
	const [showUserMenu, setShowUserMenu] = useState(true);
	const {activeMenuBar, setActiveMenuBar} = useContext(GlobalData);
	const [search, setSearch] = useState("");
	const [messageNotification, setMessageNotification] = useState(0);
	const [notification, setNotification] = useState(1);
	const name = "Pawan Kumar";

	return (
		<header>
			<div className={`header-inner-width`}>
				{/* ---[ Title Div ]--- */}
				<div className={`title-div`}>
					<h2>Recruitr</h2>
					<span>Your gateway to success!</span>
				</div>

				{/* ---[ Search Div ]--- */}
				<div className={`search-div`}>
					<input
						placeholder="Search Jobs..."
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						className={`search-text`}
					/>
					<IoSearchOutline className={`search-icon`} />
				</div>

				{/* ---[ Menu Bar ]--- */}
				<div className={`menubar-div`}>
					<div
						className={`menubar-btn ${
							activeMenuBar === "dashboard" ? "active" : ""
						}-menubar-btn`}
						onClick={(e) => setActiveMenuBar("dashboard")}
					>
						<RxDashboard className={`menubar-icons`} />
						<span>DashBoard</span>
					</div>

					<div
						className={`menubar-btn ${
							activeMenuBar === "findjob" ? "active" : ""
						}-menubar-btn`}
						onClick={(e) => setActiveMenuBar("findjob")}
					>
						<BiBriefcase className={`menubar-icons`} />
						<span>Find Jobs</span>
					</div>

					<div
						className={`menubar-btn ${
							activeMenuBar === "appliedjobs" ? "active" : ""
						}-menubar-btn`}
						onClick={(e) => setActiveMenuBar("appliedjobs")}
					>
						<FiCheckCircle className={`menubar-icons`} />
						<span>Applied Jobs</span>
					</div>
				</div>

				<div className="divider"></div>

				{/* ---[ Notification/Message Div ]--- */}
				<div className={`notification-div`}>
					<div className={`message-notification-div`}>
						<TbMessageCircle className={`notification-icon`} />
						<div
							className={`${
								messageNotification > 0 ? "show" : ""
							}-notification`}
						></div>
					</div>

					<div className={`message-notification-div`}>
						<BiBell className={`notification-icon`} />
						<div
							className={`${
								notification > 0 ? "show" : ""
							}-notification`}
						></div>
					</div>
				</div>

				<div className="divider"></div>

				{/* ---[ User Detail Div ]--- */}
				<div
					className={`user-div`}
					onClick={(e) => setShowUserMenu(!showUserMenu)}
				>
					<div className={`user-img-div`}>
						<img src={user} />
						<span>{name.split(" ")[0]}</span>
					</div>
					<RiArrowDownSFill className={`user-arrow-down-icon`} />
				</div>

				{/* ---[ User Menu Div ]--- */}
				<div
					className={`user-menu-div ${
						showUserMenu ? "hide-user-menu-div" : ""
					}`}
				>
					<div className={`profile-complition-div`}>
						60% profile completed
						<span>complete profile for better results</span>
						<div className={`subscription-btn`}>
							buy subscription to start applying for jobs
						</div>
					</div>
					<div className={`user-menu-btn`}>
						<HiOutlinePencil className={`user-menu-btn-icon`} />
						<span>update job prefrence</span>
					</div>
					<div className={`user-menu-btn`}>
						<AiOutlineFileAdd className={`user-menu-btn-icon`} />
						<span>update documents</span>
					</div>
					<div className={`user-menu-btn`}>
						<BiTrafficCone className={`user-menu-btn-icon`} />
						<span>hiring process detail</span>
					</div>
					<div className={`user-menu-btn`}>
						<FiLogOut
							className={`user-menu-btn-icon`}
							style={{ color: "red" }}
						/>
						<span style={{ color: "red" }}>Logout</span>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Header;
