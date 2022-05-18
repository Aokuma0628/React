import { createStore } from 'redux';

// storeのstateで保持するデータの初期値
const initData = {
	data: [],
	message: 'please type message:',
	mode: 'default',
	fdata: [],
};


// アクションの関数：storeの状態を変化させる唯一のトリガー
function addReduce(state, action) {
	let date = new Date();
	let date_str = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	
	let data = {
		message: action.message,
		created: date_str,
	};

	let newdata = state.data.slice(); // クローンを生成
	newdata.unshift(data); // クローンの0番目に要素の追加
	return {
		data: newdata,
		message: 'Added!',
		mode: 'default',
		fdata: [],
	};
}


function deleteReduce(state, action) {
	let newdata = state.data.slice();
	newdata = newdata.slice(action.index, 1);
	return {
		data: newdata,
		message: 'delete "' + action.index + '":',
		mode: 'delete',
		fdata: [],
	};
}

function findReduce(state, action) {
	let text = action.find;
	let fdata = [];
	state.data.forEach((value) => {
		if (value.message.indexOf(text) >= 0) {
			fdata.push(value);
		}
	});

	return {
		data: state.data,
		message: 'find "' + text + '":',
		mode: 'find',
		fdata: fdata,
	};
}

// レデューサー: redux固有の概念ではない。
// 役割としては「ただの分岐」と一旦は考えればよい。
// 返り値は必ず「新しい」stateを返さないといけない。
// type Reducer<S, A> = (state: S, action: A) => S

export function memoReducer(state = initData, action) {
	switch (action.type) {
		case 'ADD':
			return addReduce(state, action);
		case 'DELETE':
			return deleteReduce(state, action);
		case 'FIND':
			return findReduce(state, action);
		default:
			return state;
	}
}

// アクションクリエータ
// Reducerに渡すactionを生成する？
export function addMemo(text) {
	return {
		type: 'ADD',
		message: text,
	};
}

export function deleteMemo(num) {
	return {
		type: 'DELETE',
		index: num,
	};
}

export function findMemo(text) {
	return {
		type: 'FIND',
		find: text,
	};
}

export default createStore(memoReducer);
//export default memoReducer;
