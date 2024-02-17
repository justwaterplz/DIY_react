import './index.css'
import Header from './pages/root/page/components/Header'
import Footer from './pages/root/page/components/Footer'
import Menu from './pages/root/page'
//router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Menu />}/>
          </Routes>
        <Footer />
    </Router>
  );
}

export default App
