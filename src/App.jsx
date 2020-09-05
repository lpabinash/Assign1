import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 
// import Navigation from './components/navigation';
// import Editor from './components/editor';
// import Header from './components/header';
// import Features from './components/features';
// import Services from './components/services';
// import Gallery from './components/gallery';
// import Contact from './components/contact';
// import JsonData from './data/data.json';
import Landing1 from './Landing1';
// import Landing2 from './Landing2';
import Home from './Home'; 

// import Landing2 from './Landing2';
// import 'bootstrap/dist/css/bootstrap.min.css';


export class App extends Component {
 

  render() {
    return (

        <Router> 
           <div className="App"> 
            <ul className="App-header"> 
              <li> 
                <Link to="/"></Link> 
              </li>
            </ul> 
            <Switch> 
              <Route exact path='/' component={Home}></Route> 
              <Route exact path='/about' component={Landing1}></Route> 
              {/* <Route exact path='/contact' component={Contact}></Route>  */}
            </Switch> 
          </div> 
       </Router> 
    )
        // <Landing1 />
  }
}

export default App;
