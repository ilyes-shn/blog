import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Blog from './Blog';
import About from './About';
import Login from './Login';
import Volunteers from './Volunteers';
import Contact from './Contact';
import Home from './Home';
import Services from './Services';

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/" exact component={Home}/>
        <Route path="/blog" exact component={Blog}/>
        <Route path="/services" exact component={Services}/>

        <Route path="/about" exact component={About}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/volunteers" exact component={Volunteers}/>
        <Route path="/contact" exact component={Contact}/>


      </Switch>
    </Router>
  );
}

export default App;
