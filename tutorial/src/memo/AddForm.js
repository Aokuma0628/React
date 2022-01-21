import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMemo } from './Store';

class AddForm extends Component {
	s_input = {
		fontSize: '14px',
		color: '#006',
		padding: '1px',
		margin: '5px 0px',
	};

	s_btn = {
		fontSize: '14px',
		color: '#006',
		padding: '2px 10px',
	};

	s_msg = {
		fontSize: '16px',
		color: '#006',
		padding: '5px 10px',
	};

	constructor(props) {
		super(props);
		this.state = {
			message: '',
		};
		this.doChange = this.doChange.bind(this);
		this.doAction = this.doAction.bind(this);
	}

	doChange(e) {
		this.setState({
			message: e.target.value,
		});
	}

	doAction(e) {
		// preventDefault(): イベントが処理されない
		e.preventDefault();
		// Store.jsで定義されたAddのアクションクリエータ(addMemo)
		let action = addMemo(this.state.message);
		// dispatch: レデューサーにactionを送信する。
		this.props.dispatch(action);
		// 追加した後はステートのmessageを空にする。
		this.setState({
			message: ''
		});
	}

	render() {
		return (
			<div>
				<p style={this.s_msg}>{this.props.message}</p>
				<form onSubmit={this.doAction}>
					<input type='text' size='40' onChange={this.doChange}
						style={this.s_input} value={this.state.message} required />
					<input type='submit' style={this.s_btn} value='Add' />
				</form>
			</div>
		)
	}
}

export default connect((state) => state)(AddForm);