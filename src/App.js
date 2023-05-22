import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home, Pricing, Training, Contact } from "./routes";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/pricing" element={<Pricing />} />
				<Route path="/training" element={<Training />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
