import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Questions from './pages/Questions/Questions';

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='login' element={<Login />} />
				<Route path='questions' element={<Questions />} />
				<Route path='*' element={<Error text={'Page not found'} />} />
			</Routes>
		</>
	);
}

export default App;
