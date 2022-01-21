import React, { Component } from 'react';
import { connect } from 'react-redux';

import Item from './Item';

class Memo extends Component {
	render() {
		let data;
		let n = 0;
		switch (this.props.mode) {
			case 'default':
			case 'delete':
				data = this.props.data.map((value) => (
					<Item key={value.message} value={value} index={n++} />
				));
				break;
			case 'find':
				data = this.props.fdata.map((value) => (
					<Item key={value.message} value={value} index={n++} />
				));
				break;
			default:
				data = this.props.data.map((value) => (
					<Item key={value.message} value={value} index={n++} />
				));
				break;
		}

		return (
			<table><tbody>{data}</tbody></table>
		);
	}
}

// connect関数
// reactのコンポーネントとstoreをつなぐ役割
// connect(mappingState) (Component)
// mappingState: コンポーネントで使用するstateを返す関数
// Component: storeと接続したいコンポーネント
// connectのmappingStateで指定されたstateは、コンポーネントの
// this.props に組み込まれる
export default connect((state) => state)(Memo);