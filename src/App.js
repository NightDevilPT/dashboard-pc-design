import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { GlobalData } from "./context/ContextAPI";

import { useContext } from "react";

function App() {
    const {activeMenuBar}=useContext(GlobalData)
	return (
		<div className="App">
			<Header />
            <Dashboard />
			<Footer />
		</div>
	);
}

export default App;
