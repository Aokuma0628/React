import React, { Component } from 'react';


class Footer extends Component {
	render() {
		return (
			<footer>
				<div className='footer'>
					{this.props.footer}
				</div>
			</footer>
		);
	}
}

export default Footer;