import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Apply from "./pages/Apply";
import Support from "./pages/Support";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		AOS.init({
			once: true,
			disable: "phone",
			duration: 700,
			easing: "ease-out-cubic",
		});
	}, []);
	return (
		<Router>
			<Routes>
				<Route
					path='/'
					element={<Landing />}
				/>
				<Route
					path='/apply'
					element={<Apply />}
				/>
				<Route
					path='/support'
					element={<Support />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
