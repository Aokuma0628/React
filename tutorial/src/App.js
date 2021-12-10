import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Game from "./Game";

function App() {
	return (
		<div className="App">
			<h1>Test Ract App</h1>
			{/* ルートの定義 */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="game" element={<Game />} />
			</Routes>
			
		</div>
	);
}

function Home() {
	return (
		<div className="Home">
				<h2>Welcome to the homepage!</h2>
			<nav>
				<ul>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/game">Game</Link></li>
				</ul>
			</nav>
		</div>
	);
}




export default App;
