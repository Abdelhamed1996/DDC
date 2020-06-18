import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav'
import Landing from './components/layout/Landing'
import Register from './components/layout/Register'
import Login from './components/layout/Login'


const App = () => {
  return (
    <Router>
      <>
        <Nav />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </Switch>
        </section>
      </>
    </Router>

  );
}

export default App;
