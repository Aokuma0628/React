import React, { Component } from 'react';
import { connect, connet } from 'react-redux';
import './App.css';
import Memo from './memo/Memo';
import AddForm from './memo/AddForm';
import FindForm from './memo/FindForm';
import DelForm from './memo/DelForm';
import PersistForm from './memo/PersistForm';


class App extends Component {
	s_td = {
		width: '250px',
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='ch4_2'>
				<h1>Memo</h1>
				<AddForm />
				<hr />
				<table><tbody><tr>
					<td style={this.s_td}><FindForm /></td>
					<td style={this.s_td}><DelForm /></td>
					<td style={this.s_td}><PersistForm /></td>
				</tr></tbody></table>
				<Memo />
			</div>
		);
	}
}

export default connect()(App);