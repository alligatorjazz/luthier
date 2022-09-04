import { render } from "preact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Index.scss";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Home from "./routes/Home";

render(
	(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	),
	// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
	document.getElementById("app")!
);
