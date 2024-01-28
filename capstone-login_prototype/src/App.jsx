import Login from './Login';
import Welcome from './Welcome';
import Chat from './Chat';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        {/* welcome page */}
        <Route path='/' element={<Welcome />} />
        
        {/* login page */}
        <Route path='/login' element={<Login />} />

        {/* chat page */}
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </Router>
  );
}

export default App
