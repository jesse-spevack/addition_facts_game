import React, { Component } from 'react';
import Game from './Game';
import SignIn from "./SignIn";
import VersionFooter from "./VersionFooter";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: ""
    }

    this.signIn = this.signIn.bind(this)
    this.signOut = this.signOut.bind(this)
  }

  signIn(username) {
    this.setState({
      isLoggedIn: true,
      user: username
    })
  }

  signOut() {
    this.setState({
      isLoggedIn: false,
      user: ""
    })
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn;
    let screen;

    if (isLoggedIn) {
      screen = <Game user={this.state.user} signOut={this.signOut}/>
    } else {
      screen = <SignIn signIn={this.signIn}/>
    }

    return (
      <div className="flex flex-col min-h-screen text-white bg-slate-800">
        <div className="flex-grow">
          {screen}
        </div>
        <VersionFooter/>
      </div>
    )
  }
}

export default App;