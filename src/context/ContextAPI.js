import React, { createContext, useState } from "react";

export const GlobalData = createContext();

function ContextAPI({ children }) {
	const [theme, setTheme] = useState("light");
	const [activeMenuBar, setActiveMenuBar] = useState("dashboard");

	return (
		<GlobalData.Provider
			value={{
				theme,
				setTheme,
				activeMenuBar,
				setActiveMenuBar,
			}}
		>
			{children}
		</GlobalData.Provider>
	);
}

export default ContextAPI;
