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

    const handleLogin = async () => {

        try{
            const response = await fetch('/data/users.json');
            if(!response.ok){
                throw new Error(`http error ${response.status}`);
            }
            const data = await response.json();

            const user = data.users.find(
                (user) => user.username === username && user.password === password
            );

            if(user){
                console.log('login success', user);
            }else{
                console.log('unknown information');
            }
        }catch(error){
            console.error('error occured', error);
        }
    };

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
