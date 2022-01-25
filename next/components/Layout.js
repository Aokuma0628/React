import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import style from '../static/Style';
import Head from 'next/head';

class Layout extends Component {
	render() {
		return (
			<div className='layout'>
				<Head>
					<title>{this.props.title}</title>
					<meta charSet='utf-8' />
					<meta name='viewport' content='initial-scale=1.0' width='device-width' />
				</Head>
				{style}
				<Header header={this.props.header} title={this.props.title} />
				{this.props.children}
				<Footer footer='copyright Buntyo' />
			</div>
		);
	}
}

export default Layout;