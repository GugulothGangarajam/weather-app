// import { computeHeadingLevel } from '@testing-library/react';
import React, { useState } from 'react';
import { signInWithGoogle } from './config/Login';
import { auth } from './config/Login';
import logo from './images/Logo.svg';
import Main from './Main';
import './app.css';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const api={
  key:"764806918b515ca8446f89ea1fcf41f2",
  base:"https://api.openweathermap.org/data/2.5/"
}
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='user-info'>
        {

          this.state.currentUser ?

            (<div className="signout-img">
              {/* <div>
                <img src={this.state.currentUser.photoURL} />
              </div>
              <div>Name: {this.state.currentUser.displayName}</div>
              <div>Email: {this.state.currentUser.email}</div> */}
              <Main />
              <ExitToAppIcon className="signout" onClick={() => auth.signOut()} style={{fontSize:47}}>Signout</ExitToAppIcon>
              {/* <button onClick={() => auth.signOut()}>LOG OUT</button> */}
            </div>
            ) :(
              <div className="logo-button" >
                <img src={logo} alt="weather-app"/>
              <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button></div>
              
            )
        }
      </div >
    );
  }
}

export default App;
