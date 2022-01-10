import * as React from "react";

class Message extends React.Component {
	s_li = {
		fontSize: '16px',
		color: 		'#06',
		margin: 	'0px',
		padding: 	'0px',
	};

	render() {
		let content = this.props.children; // props.childrenが内部のエレメントを取り出す
		let arr = content.split('。');
		let arr2 = [];

		for (let i = 0; i < arr.length; i++) {
			if (arr[i].trim() !== '') {
				arr2.push(arr[i]);
			}
		}

		let list = arr2.map((value, key) => (
			<li style={this.s_li} key={key}>{value}.</li>
		));

		return (
			<div className='message'>
				<h2>{this.props.title}</h2>
				<ol>{list}</ol>
			</div>
		)
	}
}


class Text extends React.Component {
	s_input = {
		fontSize: '12px',
		padding: 	'5px',
	};

	constructor(props) {
		super(props);
		this.doChange = this.doChange.bind(this);
	}

	doChange(e) {
		if (e.target.value.length > this.props.maxlength) {
			this.props.onCheck(e);
			e.target.value = e.target.value.substr(0, this.props.maxlength);
		}
	}

	render() {
		return (
			<input type='text' style={this.s_input} onChange={this.doChange} />
		);
	}
}


class App extends React.Component {
	input = '';

	s_msg = {
		fontSize: '20px',
		color: 		'#900',
		margin: 	'20px 0px',
		padding: 	'5px'
	};

	s_input = {
		fontSize: '12px',
		padding: 	'5px',
	};

	constructor(props) {
		super(props);
		this.state = {
			msg: 'type your name:',
		};
	
		this.doChange 	= this.doChange.bind(this);
		this.doSubmit 	= this.doSubmit.bind(this);
		this.doCheck 		= this.doCheck.bind(this);
	}

	doChange(e) {
		this.input = e.target.value;
	}

	doSubmit(e) {
		this.setState({
			msg: 'Hello, ' + this.input + '!!',
		});
		e.preventDefault();
	}

	doCheck(e) {
		alert(e.target.value + 'は長すぎます。(最大10文字)');
	}

	render() {
		return (
			<div className='app'>
				{/* コンポーネントの内部にエレメントを持つ場合 */}
				<Message title='children!'>
				これはコンポーネント内のコンテンツです。
				マルでテキストを分割し、リストにして表示します。
				改行は必要ありません。
				</Message>
				<h2>{this.state.msg}</h2>
				<form onSubmit={this.doSubmit}>
					<label>
						<span style={this.inputStyle}></span>Message: 
						<input type="text" style={this.s_input} onChange={this.doChange}
						required pattern='[A-Za-z _,.]+' />
					</label>
					<input type='submit' style={this.s_input} value='Click' />
					<p><Text maxlength='10' onCheck={this.doCheck} /></p>
				</form>
			</div>
		)
	}

}


function Ch3sub2() {
	return (
		<div className="Ch3sub">
			<h2>Ch3 sub2</h2>
			<App />

		</div>
	);
}


export default Ch3sub2;