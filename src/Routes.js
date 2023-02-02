import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./views/Home";
import Course from "./views/Course";


const RoutesApp = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" exact />
				<Route element={<Course />} path="/curso" exact />
			</Routes>
		</BrowserRouter>
	)
}

export default RoutesApp;
