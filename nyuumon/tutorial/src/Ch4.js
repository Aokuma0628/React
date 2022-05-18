import * as React from "react";
import { Link } from "react-router-dom";


function Ch4() {
	return (
		<div className="Ch4">
			<ul>
				<li><Link to="ch4_1">Ch4-1</Link></li>
				<li><Link to="ch4_2">Ch4-2</Link></li>
			</ul>
		</div>
	);
}


export default Ch4;