import React from "react";
import './welcomepage.css';
import { Link } from 'react-router-dom';

const Welcomepage = () => {

    return (
        <div className="welcome-container">
            <div className="welcome-animation">
                WELCOME
            </div>
            <div className="button-container">
                <Link to={"/login"}>
                    <button id="startbtn" value="start">
                        start
                    </button>
                </Link>
            </div>
        </div>
    );
}

//export 대문자로 안하면 인식안함
export default Welcomepage;

