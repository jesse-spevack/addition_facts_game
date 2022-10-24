import React, { Component } from 'react';
import XpBar from './XpBar';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div className="">
          <div className="px-1 grid grid-cols-2">
            <h1 className="text-sm sm:text-base xl:text-lg text-left">Score: {this.props.score}</h1>
            <h1 className="text-sm sm:text-base xl:text-lg text-right">Streak: {this.props.streak}</h1>
            <h1 className="text-sm sm:text-base xl:text-lg text-left">XP: {this.props.xp} / {this.props.nextLevelXp}</h1>
            <h1 className="text-sm sm:text-base xl:text-lg text-right">Level: {this.props.level}</h1>
          </div>
          <XpBar
            xp={this.props.xp}
            nextLevelXp={this.props.nextLevelXp}
          />
        </div>
    );
  }
}

export default ScoreBoard;