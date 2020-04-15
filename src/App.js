import React from 'react';
import './App.css';

import { Header } from './components/Header';
import { Country } from './components/Country';

const App = () => {
	return (
		<div className='App'>
			<Header />
			<Country />
		</div>
	);
};

export default App;
