import { React } from 'react';

import Employees from "./pages/Employees";
import ForgotPassword from './pages/ForgotPassword';
import GateRecords from './pages/GateRecords';
import Login from './pages/Login';
import MyInformation from "./pages/MyInformation";
import QrCode from './pages/QrCode';
import Settings from './pages/Settings';
import UserProfile from './pages/UserProfile';

function App() {
    return (
    <div className = "App">
        <UserProfile />
    </div>
    );
}

export default App;