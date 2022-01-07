import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Ch2itval from './Ch2itval';


function massage() {
	const msg = "メッセージの表示です";
	let 	flg = true;

	const type1 = {
		fontSize:		"20pt",
		fontWight:	"bold",
		color:			"red",
		border:			"2px solid green"
	};

	const type2 = {
		fontSize: "30pt",
		fontWight: "plain",
		color: "blue",
		border: "2px solid blue"
	};

	return (
		<div id="massage">
		{flg ?
			<p style={type1}>{msg}</p>
			:
			<p style={type2}>{msg}</p>
			}
		</div>
	)
}

function list() {
	const type_list = {
		fontSize: "13pt",
		padding: "5px 50px",
		border: "2px solid"
	};

	let list_data = [
		<li>One</li>,
		<li>Two</li>,
		<li>Three</li>
	];

	return (
		<div id="list">
			<ul style={type_list}>{list_data}</ul>
		</div>
	)
}

function test_map() {
	const table = {
		fontSize: '16pt',
		padding: '5px 50px',
	};

	const th = {
		color: 'white',
		backgroundColor: '#006',
		padding: '5px 15px',
	};

	const td = {
		color: 'black',
		padding: '5px 15px',
		border: '1px solid gray',
	};

	let data = [
		{ name: 'Taro', mail: 'aaa@aaa.jp', age: 45 },
		{ name: 'Yamada', mail: 'bbb@bbb.jp', age: 23 },
		{ name: 'Kate', mail: 'ccc@ccc.jp', age: 52 },
	];

	return (
		<div id="table">
			<table style={table}>
				<tr>
					<th style={th}>name</th>
					<th style={th}>mail</th>
					<th style={th}>age</th>
				</tr>
				{data.map((value) => (
					<tr>
						<td style={td}>{value.name}</td>
						<td style={td}>{value.mail}</td>
						<td style={td}>{value.age}</td>
					</tr>
				))}
			</table>
		</div>
	);
}

function test_arrow() {
	const dfn = {
		fontSize: '20pt',
		padding: '10px',
	};

	const dt = {
		fontSize: '16pt',
		color: 'white',
		backgroundColor: '#006',
		padding: '10px',
	};

	const dd = {
		color: 'black',
		padding: '10px',
	};

	let data = {
		url: 'http://google.com',
		title: 'Google',
		caption: '*google web site.',
	};

	return (
		<div id='arrow'>
			{(() => /* ここで{}を使用するとダメ。いきなりタグで開始 */
				<dl>
					<dt style={dt}><dfn style={dfn}>
						{data.title}
					</dfn></dt>
					<dd style={dd}>
						{data.caption}
					</dd>
					<dd style={dd}>
						<a href={data.url}>go to {data.title}</a>
					</dd>
				</dl>
			)()}
		</div>
	);
}


function test_itval() {
	return (
		<div id="interval">
			<Routes>
				<Route path="ch2itval" element={<Ch2itval />} />
			</Routes>
			<Link to="ch2itval">Ch2itval</Link>
		</div>
	);
}


function Ch2() {
	return (
		<div className="Ch2">
			{massage()}
			{list()}
			{test_map()}
			{test_arrow()}
			{test_itval()}
		</div>
	);
}


export default Ch2;