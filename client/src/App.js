import React ,{useEffect}from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav'
import Landing from './components/layout/Landing'
import Register from './components/layout/Register'
import Login from './components/layout/Login'
import {Provider} from 'react-redux' 
import store from './store'
import {loadUser} from './actions/auth'
import setAuthToken from './utils/setAuthToken'

if(localStorage.token){
  setAuthToken(localStorage.token)
}


const App = () => {
  
   useEffect(()=>{
     store.dispatch(loadUser())
   },[])

  return (
    <Provider store={store}>
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
    </Provider>

  );
}

export default App;
