import React from 'react';
import './App.css';
import Mylogin from './mylogin';
import Welcomepage from './welcomepage';

class App extends React.Component{
  render(){
    return(
      <div>
        <Welcomepage />
        {/* <Mylogin /> */}
      </div>
    );
  }
}

export default App;
