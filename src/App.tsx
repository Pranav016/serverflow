import React from 'react';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import UserLoggedIn from './components/ProtectedRoutes/UserLoggedIn';
import UserLoginRequired from './components/ProtectedRoutes/UserLoginRequired';
import AppProvider from './context/AppContext';
import AddPost from './pages/AddPost/AddPost';
import Dashboard from './pages/Dashboard/Dashboard';
import Error from './pages/Error/Error';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Questions from './pages/Questions/Questions';
import Signup from './pages/Signup/Signup';
import SinglePost from './pages/SinglePost/SinglePost';
import UpdatePost from './pages/UpdatePost/UpdatePost';

function App() {
	return (
		<BrowserRouter>
			<AppProvider>
				<Toaster position='top-center' reverseOrder={false} />
				<NavBar />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route
						path='login'
						element={
							<UserLoggedIn>
								<Login />
							</UserLoggedIn>
						}
					/>
					<Route
						path='signup'
						element={
							<UserLoggedIn>
								<Signup />
							</UserLoggedIn>
						}
					/>
					<Route path='questions' element={<Questions />} />
					<Route path='questions/:postId' element={<SinglePost />} />
					<Route
						path='dashboard'
						element={
							<UserLoginRequired>
								<Dashboard />
							</UserLoginRequired>
						}
					/>
					<Route
						path='add-post'
						element={
							<UserLoginRequired>
								<AddPost />
							</UserLoginRequired>
						}
					/>
					<Route
						path='update-post/:postId'
						element={
							<UserLoginRequired>
								<UpdatePost />
							</UserLoginRequired>
						}
					/>
					<Route path='reset-password' element={<ForgotPassword />} />
					<Route
						path='*'
						element={<Error text={'Page not found'} />}
					/>
				</Routes>
			</AppProvider>
		</BrowserRouter>
	);
}

export default App;
