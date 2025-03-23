import { Link } from "react-router-dom";

export default function Navbar() {
	const toggleDarkmode = () => {
		const root = document.documentElement;
		const toggle = document.getElementById("darkmode");
		if (localStorage.getItem("dark") === "true") {
			localStorage.setItem("dark", "false");
			toggle!.innerText = "mode_night";
		} else {
			localStorage.setItem("dark", "true");
			toggle!.innerText = "light_mode";
		}
		root!.classList.toggle("dark");
	};

	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/contact-me">Contattami</Link>
				</li>
			</ul>
			<button onClick={toggleDarkmode}>
				<span
					id="darkmode"
					className="material-icons"></span>
			</button>
		</nav>
	);
}
