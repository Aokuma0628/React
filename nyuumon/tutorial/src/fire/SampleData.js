import React, { Component } from 'react';
//import firebase from 'firebase/app';
import { getDatabase, ref, onValue } from "firebase/database";
import 'firebase/storage';

/* 以下の書き方は公式サイトを参考
https://firebase.google.com/docs/database/web/start?authuser=0
*/

class Sampledata extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
		this.getFireData();
	}

	getFireData() {
		const db = getDatabase();
		const sample = ref(db, 'sample');
		let self = this;
		onValue(sample, (snapshot) => {
			console.log('snapshot=', snapshot);
			console.log('snapshot.val()=', snapshot.val());
			self.setState({
				data: snapshot.val(),
			});
		});
	}

	getTableData() {
		let result = [];
		if (this.state.data == null || this.state.data.length === 0) {
			return [<tr key='0'><th>No data</th></tr>];
		}
		for (let i in this.state.data) {
			result.push(<tr key={i}>
				<th>{this.state.data[i].ID}</th>
				<th>{this.state.data[i].name}</th>
				<th>{this.state.data[i].message}</th>
			</tr>);
		}
		return result;
	}

	render() {
		if (this.state.data.length === 0) {
			this.getFireData();
		}
		return (
			<table>
				<tbody>
					{this.getTableData()}
				</tbody>
			</table>
		)
	}
}

export default Sampledata;