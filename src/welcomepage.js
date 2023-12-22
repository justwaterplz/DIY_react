import React from "react";
import { Component } from "react";
import './welcomepage.css';
import Mylogin from "./mylogin";

class Welcomepage extends Component{

    constructor(){
        super();

        this.state = {
            text: "",
            showLogin: false,
        };
    }

    componentDidMount() {
        const welcomeText = "this is welcome page.";
        let index = 0;

        //첫글자 t 스킵돼서 setState로 t로 값 갱신함
        this.setState({ text: welcomeText[index] });
    
        this.intervalId = setInterval(() => {
            if (index < welcomeText.length - 1) {
                this.setState((prevState) => ({
                    text: prevState.text + welcomeText[index],
                }));
                index++;
            }else{
                clearInterval(this.intervalId);
            }
        }, 300);
    }
    //         //현재 문자값이 빈칸이면 interval 더 빠르게 
    //         const blankDuration = welcomeText[index] === ' ' ? 10 : 900;

    //         this.setState((prevState) => ({
    //           text: prevState.text + welcomeText[index],
    //         }));
          
    //         clearInterval(this.intervalId);

    //         this.intervalId = setInterval(() => {
    //             this.setState((prevState) => ({
    //                 text: prevState.text + welcomeText[index],
    //             }));
    //         }, blankDuration);
    //     }else{
    //         clearInterval(this.intervalId);
    //     }
          
    //     },900);
    //   }

      componentWillUnmount() {
        clearInterval(this.intervalId);
      }

      handleStartButtonClick = () => {
        this.setState({ showLogin: true });
      };

    render() {
        return (
            <div className="welcome-container">
                {!this.state.showLogin ? (
                    <>
                <div className="welcome-animation">
                    {this.state.text}
                </div>
                <div className="button-container">
                    {/* //로그인창으로 가는 버튼 */}
                    <button id="startbtn" value="start" onClick={this.handleStartButtonClick}
                    type="button">
                        click to start
                    </button>
                </div>
                </>
                ) : (
                    <Mylogin />
                )}
            </div>
        );
                // {this.state.showLogin && <Mylogin />}
    }
}

//export 대문자로 안하면 인식안함
export default Welcomepage;

