import React, { Component } from 'react';
import './App.css';
import Sampledata from './fire/SampleData';
import { initializeApp }  from 'firebase/app';

const config = {
	apiKey: 'AIzaSyB8KUum8eTrCEuxXZSrZE6U-cEK3twP8aY',
	authDomain: 'buntyo-project.firebaseapp.com',
	databaseURL: 'https://buntyo-project-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'buntyo-project',
	storageBucket: 'buntyo-project.appspot.com',
	messageingSenderId: '899552126599',
};

initializeApp(config);

class App extends Component {
	render() {
		return (
			<div className='ch6-1'>
				<h1>Firebase</h1>
				<h2>Sample data.</h2>
				<Sampledata />
			</div>
		);
	}
}

export default App;