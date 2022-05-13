import './App.css';
import Navbarr from './components/Navbarr';
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div>
      <Router> 
      <Navbarr/>
        <Switch>
          <Route exact path="/" >
            <LandingPage/>
            </Route>
            <Route exact path="/home" >
            <Home/>
            </Route>
          <Route exact path="/about" >
          <About/>
            </Route>
          <Route exact path="/contact" >
          <ContactUs/>
            </Route>
        </Switch>
        </Router>
  </div>
  );
}

export default App;
