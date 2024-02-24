import './index.css'
import Header from './pages/root/page/components/Header'
import Footer from './pages/root/page/components/Footer'
import Menu from './pages/root/page'
import Brand from './pages/root/page/menubar/brand(about)/Brand'
//router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Menu />}/>

            {/* about/ (brand-line) */}
            <Route path='/about/brand' element={<Brand />}/>
          </Routes>
        <Footer />
    </Router>
  );
}

export default App
