/* eslint-disable node/no-unsupported-features/es-syntax */

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { initializeApp }  from 'firebase/app';

const config = {
	apiKey: 'AIzaSyB8KUum8eTrCEuxXZSrZE6U-cEK3twP8aY',
	authDomain: 'buntyo-project.firebaseapp.com',
	databaseURL: 'https://buntyo-project-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'buntyo-project',
	storageBucket: 'buntyo-project.appspot.com',
	messageingSenderId: '899552126599',
};

var fireapp;
try {
	initializeApp(config);
}
catch (error) {
	console.log(error.message);
}

export default fireapp;

/**** カウンターのレデューサー ***** 
const initial = {
	message: 'START',
	count: 0
}

function counterReducer(state = initial, action) {
	switch (action.type) {
		case 'INCREMENT':
			return {
				message: 'INCREMENT',
				count: state.count + 1,
			};
		case 'DECREMENT':
			return {
				message: 'DECREMENT',
				count: state.count - 1,
			};
		case 'RESET':
			return {
				message: 'RESET',
				count: initial.count
			};
		default:
			return state;
	}
} */

const initial = {
	message: 'START',
	data: [],
	number: [],
	result: 0,
}

function calcReducer(state = initial, action) {
	switch (action.type) {
		case 'ENTER':
		{
			let data2 = state.data.slice();
			let s = action.value;
			data2.unshift(s);
			let num = s.replace(/[^0-9]/g, "");
			let number2 = state.number.slice();
			number2.unshift(num);
			let result = parseInt(state.result, 10) + parseInt(num, 10);
			return {
				message: 'ENTER',
				data: data2,
				number: number2,
				result: result,
			};
		}
		case 'RESET':
			return {
				message: 'RESET',
				data: [],
				number: [],
				result: 0,
			};
		case 'test':
			return state;
		default:
			return state;
	}
}



export function initStore(state = initial) {
	return createStore(calcReducer, state, applyMiddleware(thunkMiddleware));
};