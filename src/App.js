import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<div>
			<h1>Bookkeeper</h1>
			<nav
				style={{
					borderBottom: "solid 1px",
					paddingBottom: "1rem",
				}}
			>
				<Link to="/settings">Settings</Link>
				<Link to="/login">Login</Link>
				<Link to="/register">Register</Link>
			</nav>
		</div>
	);
}

export default App;
