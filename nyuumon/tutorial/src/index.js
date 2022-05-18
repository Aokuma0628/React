import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import { createStore } from 'redux'; 
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import MemoStore, { memoReducer } from './memo/Store'

// Redux Persistの設定
const persistConfig = {
	key: 'memo',
	storage,
	blacklist: ['mesage', 'mode', 'fdata'],
	whitelist: ['data'],
};

// パーシストレデューサーの作成
const persistedReducer = persistReducer(persistConfig, memoReducer);

// ストア, パーシスターの作成
let store = createStore(persistedReducer);
let pstore = persistStore(store);

ReactDOM.render(
	// プロバイダー：ストアを他のコンポーネントに受け渡すための仕組み
	<Provider store={store}>
		<PersistGate loading={<p>loading...</p>} persistor={pstore}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</PersistGate>
	</Provider>,
	document.getElementById('root'),
);

export default pstore;