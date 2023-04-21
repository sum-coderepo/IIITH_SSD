import './App.css';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';
import React from 'react';

import {Route, useNavigate, Routes ,BrowserRouter } from "react-router-dom";


function App() {
    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginForm />}/>
                <Route path="signup" element={<SignUpForm />}/>
                <Route path="login" element={<LoginForm />}/>
            </Routes>
        </BrowserRouter>);
}

export default App;
