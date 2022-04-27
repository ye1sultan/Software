import { React } from 'react';

import Employees from "./pages/Employees";
import ForgotPassword from './pages/ForgotPassword';
import GateRecords from './pages/GateRecords';
import Login from './pages/Login';
import MyInformation from "./pages/MyInformation";
import QrCode from './pages/QrCode';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';

import {Routes, Route} from 'react-router-dom';

function App() {
    return (
    <div className = "App">
        <Routes>
            <Route index path='/login' element={<Login />} />
            <Route path='/user-profile' element={<UserProfile />} />
            <Route path='/qr-code' element={<QrCode />} />
            <Route path='/my-information' element={<MyInformation />} />
            <Route path='/gate-records' element={<GateRecords />} />
            <Route path='/employees' element={<Employees />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
    </div>
    );
}

export default App;