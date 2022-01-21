import React, { Component } from 'react';
import { connect } from 'react-redux';
import pstore from '../index';

class PersistForm extends Component {
	s_chek = {
		margin: '5px 0px',
	}

	s_label = {
		fontSize: '12px',
		color: '#006',
		padding: '2px 10px',
	}

	constructor(props) {
		super(props);
		this.state = {
			check: 'on',
		}
		this.doChange = this.doChange.bind(this);
	}

	doChange(e) {
		let flg = e.target.checked;
		this.setState({
			check: flg ? 'on' : '',
		});

		if (flg) {
			pstore.persist();
			pstore.flush();
		}
		else {
			pstore.pause();
		}
	}

	render() {
		return (
			<div>
				<label style={this.s_label}>
					<input type='checkbox' id='check' size='40' onChange={this.doChange} style={this.s_check} />
					Persist
				</label>
			</div>
		);
	}
}

export default connect((state) => state)(PersistForm);