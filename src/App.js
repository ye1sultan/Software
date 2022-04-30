import { React } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';

import Employees from "./pages/Employees";
import GateRecords from './pages/GateRecords';
import Login from './pages/Login';
import UserInformation from './pages/UserInformation';
import QrCode from './pages/QrCode';
import UserProfile from './pages/UserProfile';

function App() {
    return (
    <div className = "App">
        <Routes>
            <Route path='/' element={<Navigate to="/login" />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user-profile' element={<UserProfile />} />
            <Route path='/qr-code' element={<QrCode />} />
            <Route path='/user-information' element={<UserInformation />} />
            <Route path='/gate-records' element={<GateRecords />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
    </div>
    );
}

export default App;