import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
	s_msg = {
		fontSize: '20px',
		backgroudColor: '#123435',
		padding: '5px',
	};

	constructor(props) {
		super(props);
		this.doAction = this.doAction.bind(this);
		this.reset = this.reset.bind(this);
	}

	doAction(e) {
		if (e.shiftKey) {
			return this.props.dispatch({ type: 'DECREMENT' });
		}
		else {
			return this.props.dispatch({ type: 'INCREMENT' });
		}
	}

	reset() {
		return this.props.dispatch({ type: 'RESET' });
	}

	render() {
		return (
			<div className='counter'>
				<p>{this.props.message}:{this.props.count}</p>
				<button style={this.s_msg} onClick={this.doAction}>Count</button>
				<button style={this.s_msg} onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

Counter = connect((state) => state)(Counter);
export default Counter;