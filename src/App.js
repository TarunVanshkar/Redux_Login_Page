import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import ProfilePage from './Components/ProfilePage';

const App = () => {

    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </div>    
    )
}

export default App;
