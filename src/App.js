import Home from './components/home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CardView from './components/cardView';
import AddCard from './components/addCard';

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path='/cards'>
            <CardView />
          </Route>
          <Route path='/addCards'>
            <AddCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
