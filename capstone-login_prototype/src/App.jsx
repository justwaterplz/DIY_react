import Login from './Login';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome />} />
          
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App
