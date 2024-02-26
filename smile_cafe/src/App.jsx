import './index.css'
import React from 'react'
import Header from './pages/root/page/components/Header'
import Footer from './pages/root/page/components/Footer'
import Main from './pages/root/page'
import Brand from './pages/root/page/menubar/brand(about)/Brand'
import Map from './pages/root/page/menubar/brand(about)/Map'
//router
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';


function App() {
  
  
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Main />}/>

            {/* about/ (brand-line) */}
            <Route path="about" element={<Outlet />} >
              <Route path="brand" element={<Brand />}/>
              <Route path="map" element={<Map />}/>
            </Route>
          </Routes>
        <Footer />
    </Router>
  );
}

export default App
