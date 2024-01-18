import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mylogin from './mylogin';
import Welcomepage from './welcomepage';

const App = () => {
  return(
    <Router>
      <Routes>
        {/* index */}        
        <Route path='/' element={<Welcomepage />} />
        {/* login page */}
        <Route path='/login' element={<Mylogin />} />
      </Routes>
    </Router>
  ) 
}

export default App;
