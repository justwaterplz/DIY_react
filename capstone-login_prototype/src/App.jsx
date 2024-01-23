import Login from './Login';
import Welcome from './Welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}

export default App
