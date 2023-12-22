import React from "react";
import { Component } from "react";
import './mylogin.module.css';

class Mylogin extends Component{

    constructor(){
        super();

        //userid, password
        this.state = {
            userid: '',
            password: '',
        }
    }
    //
    //입력값 감지
    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value }); 
    }

    //submit handler
    handleSubmit = (event) => {
        console.log('userid: ', this.state.userid);
        console.log('password: ', this.state.password);
    };

    render(){
        return(
            <div class="login-container">
                 <form onSubmit={this.handleSubmit}>
                    {/* id */}
                    <label>
                        user id:
                        <input className="login-input" type="text" name="userid" value={this.state.userid} onChange={this.handleInputChange}/>
                    </label>

                    {/* pw */}
                    <label>
                        <input className="login-input" type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                    </label>

                    {/* submit */}
                    <button type="submit">Sign IN</button>
                 </form>
            </div>
        );
    }
}

export default Mylogin;
/*

App -main함수


*/
