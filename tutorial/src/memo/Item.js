import React, { Component } from 'react';
import { connect } from 'react-redux';

class Item extends Component {
	s_th = {
		fontSize: '14px',
		backgroundColor: 'blue',
		color: 'white',
		padding: '5px 10px',
		width: '50px',
	};

	s_td = {
		fontSize: '14px',
		backgroundColor: 'white',
		color: 'darkblue',
		padding: '5px 10px',
		border: '1px solid lightblue',
		minWidth: '300px',
	};

	s_date = {
		fontSize: '14px',
		backgroundColor: 'white',
		color: 'darkblue',
		padding: '5px 10px',
		border: '1px solid lightblue',
		width: '80px',
	};

	render() {
		return (
			<tr>
				<th style={this.s_th}>No, {this.props.index}</th>
				<td style={this.s_td}>{this.props.value.message}</td>
				<td style={this.s_date}>{this.props.value.created}</td>
			</tr>
		);
	}
}

// steteをこのクラスでは使用しないので、
// mappingState関数を指定しなくてもよい
export default connect()(Item);