import React, { Component } from "react";
import Game from "./Game";
import SignIn from "./SignIn";
import Stats from "./Stats";
import VersionFooter from "./VersionFooter";
// import {db} from "./firebase";
// import {collection, getDocs, addDoc, updateDoc} from "firebase/firestore";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      user: "",
      showStats: false,
    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
    this.showStats = this.showStats.bind(this);
    this.backToGame = this.backToGame.bind(this);

    // const usersCollectionRef = collection(db, "addition_facts")
    // const getUser = async () => {
    //   const data = await getDocs(usersCollectionRef)
    //   console.log(data.docs[0].data())
    //   console.log(data.docs[0].id)
    // }

    // getUser()
  }

  signIn(username) {
    this.setState({
      isLoggedIn: true,
      user: username,
    });
  }

  signOut() {
    this.setState({
      isLoggedIn: false,
      user: "",
    });
  }

  showStats() {
    this.setState({ showStats: true });
  }

  backToGame() {
    this.setState({ showStats: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let screen;

    if (isLoggedIn) {
      if (this.state.showStats) {
        screen = (
          <Stats
            user={this.state.user}
            stats={localStorage.getItem(this.state.user)}
            back={this.backToGame}
          />
        );
      } else {
        screen = (
          <Game
            user={this.state.user}
            signOut={this.signOut}
            showStats={this.showStats}
          />
        );
      }
    } else {
      screen = <SignIn signIn={this.signIn} />;
    }

    return (
      <div className="font-sans flex flex-col min-h-screen text-white bg-slate-900">
        <div className="flex-grow">{screen}</div>
        <VersionFooter />
      </div>
    );
  }
}

export default App;
