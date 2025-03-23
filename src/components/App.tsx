import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import ContactMe from "@/pages/ContactMe";
import NotFound from "@/pages/NotFound";
import "@/styles/App.css";

export default function App() {
	window.onload = () => {
		const toggle = document.getElementById("darkmode");
		if (localStorage.getItem("dark") === "true") {
			toggle!.textContent = "light_mode";
		} else {
			toggle!.textContent = "mode_night";
		}
	};
	return (
		<BrowserRouter>
			<Header />
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/contact-me" element={<ContactMe />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}
