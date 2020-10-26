import React from 'react';
import App from './App';
import './Logout.css';

const Logout = ({handleLogout}) => {
    return (
        <div>
            <App/>
            <div>
                <button className = "logout" onClick={handleLogout}>Logout</button>
            </div>
                
        </div>
        
    );
}
export default Logout;