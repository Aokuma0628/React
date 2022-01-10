import * as React from "react";
import { Link } from "react-router-dom";
import About from "./About";

const p = {
	fontSize: "20px",
	fontWeight: "bold",
	padding: "10px",
	backgroundColor: "darkblue",
	color: "white",
};


function Calc(props) {
	let total = 0;

	for (let i = 0; i < props.num; i++) {
		total += i;
	}
	return (
		<p style={p}>1から{props.num}までの合計は、「{total}」です。</p>
	);
}

function Hello(props) {
	return (
		<p style={p}>Hello world, {props.name}({props.age})</p>
	);
}


class Thank extends React.Component {
	msgStyle = {
		fontSize: "24px",
		color: "#005",
		passing: "5px",
		backgroundColor: "#390"
	};

	msgStyle2 = {
		fontSize: '20px',
		color: '#900',
		backgroundColor: '#7005',
		padding: '5px',
	};

	btnStyle = {
		fontSize: '16px',
		padding: '10px',
	};

	constructor(props) {
		super(props);

		this.state = {
			msg: 'Hello Component.',
			counter: 0,
			flg: true,
		};
		this.incrCount = this.incrCount.bind(this);
		// タイマーでメッセージの変更
		// let timer = setInterval(() => {
		// 	this.setState((state) => ({
		// 		msg: state.msg + "!#"
		// 	}));
		// }, 2000);
	}

	incrCount(e) {
		this.setState((state) => ({
			counter: state.counter + 1,
			msg: 'count: ' + state.counter,
			flg: !state.flg,
		}));
	}

	render() {
		return (
			<div id="hello">
				{this.state.flg ?
					<p style={this.msgStyle}>{this.state.msg}</p>
					:
					<p style={this.msgStyle2}>{this.state.msg}</p>
				}
				<p style={this.msgStyle}>{this.props.msg}</p>
				<button onClick={this.incrCount}>Click</button>
			</div>
		)
	}
}

class Rect extends React.Component {
	x 			= 0;
	y 			= 0;
	width 	= 0;
	height 	= 0;
	color 	= "white";
	style 	= {};

	constructor(props) {
		super(props);
		this.x 			= props.x;
		this.y 			= props.y;
		this.width 	= props.w;
		this.height = props.h;
		this.color = props.c;
		this.radius = props.r;
		this.style 	= {
			backgroundColor: this.color,
			position: "absolute",
			left: this.x + "px",
			top: this.y + "px",
			width: this.width + "px",
			height: this.height + "px",
			borderRadius: this.radius + "px",
		}
	}

	render() {
		return <div style={this.style}></div>
	}
}

function Ch3() {
	const age = 11;
	return (
		<div className="Ch3">
			<Hello name="Taro" age={age}/>
			<Calc num="500" />
			<Calc num="1250" />
			<Thank msg="Thank you"/>
			<Rect x="500" y="100" w="100" h="100" c="cyan" r="10" />
			<Rect x="600" y="300" w="200" h="150" c="#f669" />
			<About test="help!!!" />
			<ul>
				<li><Link to="ch3sub">Ch3sub</Link></li>
				<li><Link to="ch3sub2">Ch3sub2</Link></li>
				<li><Link to="ch3sub3">Ch3sub3</Link></li>
			</ul>
		</div>
	);
}


export default Ch3;