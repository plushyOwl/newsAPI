import App from './components/App';
import createStore from './utils/Store';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';


const store = createStore();


ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);