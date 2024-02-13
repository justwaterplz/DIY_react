import './index.css'
import Header from './pages/root/page/components/Header'
import Footer from './pages/root/page/components/Footer'
import Menu from './pages/root/page'
//router
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  
  
  return (
    <>
      <Router>
        <div className="flex flex-col h-screen">
          <Header />
          <div className="flex-grow">
            <Menu />
          </div>
          <Footer />
        </div>
      </Router>
    </>
  )
}

export default App
