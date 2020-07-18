import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from './components/layout/Nav';
import Landing from './components/layout/Landing';
import Register from './components/layout/Register';
import Login from './components/layout/Login';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import MyProfile from './components/profile/Myprofile';
import Contacts from './components/chat/Contacts';
import Chat from './components/chat/Chat';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import { connect } from 'react-redux';

if (localStorage.token) {
  setAuthToken(localStorage.token)
}


const App = props => {

  useEffect(() => {
    store.dispatch(loadUser())
  }, [])

  console.log("props",props)
  return (

      <Router>
        <>
        <section className='container-fluid p-0' style={!props.auth.isAuht ? {background:"#43a5f5"} :{background:"#f0f2f5",height:"100%"}}>
          <Nav />


            <Switch>
              <Route exact path='/register' component={Register} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/profiles' component={Profiles} />
              <PrivateRoute exact path='/me' component={MyProfile} />
              <Route exact path='/profile/:id' component={Profile} />
              <PrivateRoute exact path='/dashboard' component={Dashboard} />
              <PrivateRoute exact path='/create-profile' component={CreateProfile} />
              <PrivateRoute exact path='/edit-profile' component={EditProfile} />
              <PrivateRoute exact path='/contacts' component={Contacts} />
              <PrivateRoute exact path='/chat/:id' component={Chat} />
              <Route exact path='/' component={Landing} />
            </Switch>
            </section>
        </>
      </Router>


  );
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps,{})(App);
