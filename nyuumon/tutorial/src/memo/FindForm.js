import React, { Component } from 'react';
import { connect } from 'react-redux';
import { findMemo } from './Store';

class FindForm extends Component {
	s_input = {
		fontSize: '14px',
		color: '#006',
		padding: '0px',
	};

	s_btn = {
		fontSize: '12px',
		color: '#006',
		padding: '1px 10px',
	};

	constructor(props) {
		super(props);
		this.state = {
			find: '',
		};
		this.doChange = this.doChange.bind(this);
		this.doAction = this.doAction.bind(this);
	}

	doChange(e) {
		this.setState({
			find: e.target.value,
		});
	}

	doAction(e) {
		e.preventDefault();
		let action = findMemo(this.state.find);
		this.props.dispatch(action);
	}

	render() {
		return (
			<div>
				<form onSubmit={this.doAction}>
					<input type='text' size='10' onChange={this.doChange}
						style={this.s_input} value={this.state.message}/>
					<input type='submit' style={this.s_btn} value='Find' />
				</form>
			</div>
		)
	}
}

export default connect((state) => state)(FindForm);