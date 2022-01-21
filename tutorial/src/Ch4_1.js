import * as React from "react";
import { connect } from 'react-redux';



// ボタン表示のコンポーネント
class Button extends React.Component {
	s_btn = {
		fontSize: '16px',
		padding: '5px 10px',
	}
	constructor(props) {
		super(props);
		this.doAction = this.doAction.bind(this);
	}

	// ボタンクリックでディスパッチを実行
	doAction(e) {
		if (e.shiftKey) {
			this.props.dispatch({ type: 'DECREMENT' });
		}
		else {
			this.props.dispatch({ type: 'INCREMENT' });
		}
	}

	render() {
		return (
			<button style={this.s_btn} onClick={this.doAction}>
				click
			</button>
		);
	}
}

Button = connect()(Button);

// ステートのマッピング
function mappingState(state) {
	return state;
}

// メッセージ表示のコンポーネント
class Message extends React.Component {
	s_msg = {
		fontSize: '20px',
		padding: '20px 5px',
	};

	render() {
		return (
			<p style={this.s_msg}>
				{this.props.message}: {this.props.counter}
			</p>
		);
	}
}
// ストアのコネクト
Message = connect(mappingState)(Message);

// コンポーネント
class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='4-1_app'>
				<h3>Redux</h3>
				<Message />
				<Button />
			</div>
		);
	}
}

// ストアのコネクト
App = connect()(App);


function Ch4_1() {
	return (
		<div className="Ch3">
			<h2>4-1章</h2>
			<App />
		</div>
	);
}


export default Ch4_1;