import React from "react";
import './mylogin.module.css';
import { useState } from 'react';
const Mylogin = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //username 입력값으로 변경
    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    //password
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = () => {

        //로그인처리
        if(!username || !password){
            alert("username AND password are required");
            return;
        }

        if(password.length < 10){
            alert("password should be more than 10 characters");
            return;
        }

        console.log('Username', username);
        console.log('password', password);
    }

    return(
        <div>
            <h1>login</h1>
            <div>
                <label htmlFor="username">username</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="password">password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </div>

            <div>
                <button onClick={handleLogin}>LOGIN</button>
                
            </div>
        </div>
    );
}
export default Mylogin;
/*

App -main함수


*/
