import * as React from 'react';
import ReactDOM from 'react-dom';

const p = {
	fontSize: '20px',
	padding: '10px',
};

//2.4章の内容は理解したが、
//別URLでさらにrenderする方法が分からない
//一旦保留

function Ch2itval() {
	let cnt = 0;
	setInterval(() => {
		cnt++;
		let el = (
			<div>
				<p style={p}>count: {cnt}</p>
			</div>
		);
		ReactDOM.render(el, document.getElementById('root'));
	});
}

export default Ch2itval;