import * as React from "react";

class Area extends React.Component {
	data = [];

	s_area = {
		width: 	'400px',
		height: '150px',
		border: '1px solid blue'
	};

	constructor(props) {
		super(props);

		this.state = {
			list: this.data
		};
		this.incsq = this.incsq.bind(this);
	}

	incsq(e) {
		let x = e.pageX;
		let y = e.pageY;
		this.data.push({ x: x, y: y });
		this.setState({
			list: this.data
		});
	}

	draw(d) {
		let s = {
			position: 'absolute',
			left: 		(d.x - 25) + 'px',
			top: 			(d.y - 25) + 'px',
			width: 		'50px',
			height: 	'50px',
			backgroundColor: '#66f3',
		};

		return <div style={s}></div>;
	}

	render() {
		return (
			<div className="area">
				<h2>show rect.</h2>
				<div style={this.s_area} onClick={this.incsq}>
					{this.data.map((value) => this.draw(value))}
				</div>
			</div>
		);
	}
}

class Item extends React.Component {
	s_li = {
		listStyleType: 	'square',
		fontSize: 			'16px',
		color: 					'#066',
		margin: 				'0px',
		padding: 				'0px',
	};

	s_num = {
		fontWeight: 'bold',
		color: 			'red',
	};

	render() {
		return (
			<div className='item'>
				<li style={this.s_li}>
					<span style={this.s_num}>[{this.props.number}]</span>
					{this.props.value}
				</li>
			</div>
		);
	}
}

class List extends React.Component {
	number = 101;

	s_title = {
		fontSize: 	'20px',
		fontWeight: 'bold',
		color: 			'blue',
	};

	render() {
		let data = this.props.data;
		return (
			<div className='list'>
				<p style={this.s_title}>{this.props.title}</p>
				<ul>
					{data.map((item) => 
						<Item number={this.number++} value={item} key={this.number} />
					)}
				</ul>
			</div>
		)
	}
}


class Show extends React.Component {
	data = [
		'This is list sample.',
		'これはリストのサンプルです',
		'配列をリストに変換します',
	];

	msgStyle = {
		fontSize: 	'20px',
		color: 			'#900',
		margin: 		'20px 0px',
		padding: 		'5px',
	};

	constructor(props) {
		super(props);
		this.state = {
			list: this.data
		};
	}

	render() {
		return (
			<div className='show'>
				<h2 style={this.msgStyle}>show list.</h2>
				<List title='サンプル・リスト' data={this.data} />
			</div>
		);
	}
}

function Ch3sub() {
	return (
		<div className="Ch3sub">
			<h2>Ch3 sub</h2>
			<Area />
			<Show />
		</div>
	);
}


export default Ch3sub;