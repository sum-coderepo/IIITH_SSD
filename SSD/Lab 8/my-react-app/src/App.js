import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import Profile from './components/Profile';
import React from 'react';

import {Route, useNavigate, Routes ,BrowserRouter } from "react-router-dom";


function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />}/>
                <Route path="signup" element={<SignUpForm />}/>
                <Route path="login" element={<LoginForm />}/>
                <Route path="profile" element={<Profile />}/>
            </Routes>
        </BrowserRouter>);
}

export default App;
