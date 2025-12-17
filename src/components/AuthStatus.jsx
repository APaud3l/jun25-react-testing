import React from 'react';
import { useAuth } from '../contexts/AuthContext';

function AuthStatus(){
    const { user, login, logout } = useAuth();

    if (!user) {
        return (
            <div>
                <p>You are not logged in</p>
                <button onClick={() => login('Alice')}>Login as Alice</button>
            </div>
        );
    }

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button onClick={() => logout()}>Logout</button>
        </div>
    );
}

export default AuthStatus;