import * as React from "react";

// let data = {
// 	title: 	'Title',
// 	msg: 		'this is sample message.',
// };

let theme = {
	light: {
		backgroundColor: '#eef',
		color: '#006',
		padding: '10px',
	},
	dark: {
		backgroundColor: '#006',
		color: '#eef',
		padding: '10px',
	},
	title: 'Title',
	msg: 'this is sample message',
};

const SampleContext = React.createContext(theme);

class Title extends React.Component {
	static contextType = SampleContext;

	render() {
		return (
			<div className='title'>
				<h2>{this.context.title}</h2>
			</div>
		);
	}
}

class Msg extends React.Component {
	static contextType = SampleContext;

	render() {
		return (
			<div className='msg'>
				<p>{this.context.msg}</p>
			</div>
		);
	}
}


class App extends React.Component {
	newData = {
		title: '新しいタイトル',
		msg: 'これは新しいメッセージです。',
	};

	static contextType = SampleContext;

	render() {
		return (
			<div className='app' style={this.context.light}>
				<h1>Context</h1>
				<Title />
				<Msg />
				<SampleContext.Provider value={this.newData}>
					<Title />
					<Msg />
				</SampleContext.Provider>
				<Title />
				<Msg />
			</div>
		);
	}
}


function Ch3sub3() {
	return (
		<div id='sub3'>
			<App />
		</div>
	)

}

export default Ch3sub3;