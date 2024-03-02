import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

const RootRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default RootRouter;
