import { useState } from "react";
import Game from "./Game";
import SignIn from "./SignIn";
import Stats from "./Stats";
import VersionFooter from "./VersionFooter";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [username, setUsername] = useState("");

  const signOut = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const signIn = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
  };

  let screen;

  if (isLoggedIn) {
    if (showStats) {
      screen = (
        <Stats
          user={username}
          rawStats={localStorage.getItem(username)}
          back={() => setShowStats(false)}
        />
      );
    } else {
      screen = (
        <Game
          username={username}
          signOut={signOut}
          showStats={() => setShowStats(true)}
        />
      );
    }
  } else {
    screen = <SignIn signIn={signIn} />;
  }

  return (
    <div className="font-sans flex flex-col min-h-screen text-white bg-slate-900">
      <div className="flex-grow">{screen}</div>
      <VersionFooter />
    </div>
  );
};

export default App;
