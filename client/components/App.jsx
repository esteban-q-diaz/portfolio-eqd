import React from 'react';
import Header from './Header';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';import {
  Route,
  BrowserRouter as Router,
  Switch,
  useLocation,
  withRouter,
} from 'react-router-dom';
import NavBar from './NavBar';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact>
            {/* <Header /> */}
            <Projects />
          </Route>



          <Route path='/projects' exact>
            <Projects />
          </Route>

          <Route path='/about' exact>
            <About />
          </Route>


          <Route path='/contact' exact>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </>
  )
}

export default App