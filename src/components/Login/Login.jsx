// src/components/Login.js
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert('Logged in successfully');
        } catch (error) {
            console.error('Error logging in:', error.message);
            alert(`Failed to log in: ${error.message}`);
        }
    };

    return (
        <div className='login-form'>
            <form onSubmit={handleLogin}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Login;
