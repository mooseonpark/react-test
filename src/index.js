import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Coin from './Coin';
// import Todo from './Todo';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter basename={process.env.PUBLIC_URL}>
		<App />
		{/* <Coin />
		<Todo /> */}
	</BrowserRouter>
);
