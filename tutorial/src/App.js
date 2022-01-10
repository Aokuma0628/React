import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./About";
import Game from "./Game";
import Ch2 from "./Ch2";
import Ch3 from "./Ch3";
import Ch3sub from "./Ch3sub";
import Ch3sub2 from "./Ch3sub2";
import Ch3sub3 from "./Ch3sub3";
import './App.css';



const nav_style = {
	backgroundColor: '#CBE6F3',
	padding: '3px',
	border: '4px solid #6EB7DB',
	borderRadius: '10px',
	position: 'absolute',
	bottom: '15px',
	width: '80%'
};

const hd_style = {
	backgroundColor: '#EEF5D3',
	border: '4px solid #A4C520',
	padding: '10px'
}

let printHeader = () => {
	return (
		<h1 style={hd_style}>
			React TEST APP
		</h1>
	);
};

let printNav = () => {
	return (
		<nav style={nav_style}>
			<ul>
				<li><Link to="/about">About</Link></li>
				<li><Link to="/game">Game</Link></li>
				<li><Link to="/ch2">Ch2</Link></li>
				<li><Link to="/ch3">Ch3</Link></li>
				<li><Link to="/">Home</Link></li>
			</ul>
		</nav>
	)
}


let footer_st = {
	//position: absolute,
	bottom: 0
};

function App() {
	return (
		<div className="App">
			{/* ヘッダーみたいなもの */}
			{printHeader()}

			{/* ルートの定義 */}
			<Routes>
				{/* ルートページの定義 */}
				<Route exact path="/" element={<Home />} />

				{/* ルートからのパスを定義 */}
				<Route path="about" element={<About />} />
				<Route path="game" element={<Game />} />
				<Route path="ch2" element={<Ch2 />} />
				<Route path="ch3" element={<Ch3 />} />

				{/* パスの定義はこの場所でしないと反映されない。理由は不明 */}
				<Route exact path="ch3/ch3sub" element={<Ch3sub />} />
				<Route exact path="ch3/ch3sub2" element={<Ch3sub2 />} />
				<Route exact path="ch3/ch3sub3" element={<Ch3sub3 />} />
			</Routes>
			<footer style={footer_st} >
				{printNav()}
			</footer>
		</div>
	);
}


function Tmp() {
	return (
		<h1>Tmep test</h1>
	);
}

let test = "test string";

function Home() {
	return (
		// return の中は大きな<div></div>で囲う必要あり
		<div className="Home">
			<h2>Welcome to the homepage!</h2>
			<div className="tmp">
				<Tmp />
				<h1>{test}</h1>
			</div>
		</div>
	);
}

export default App;
