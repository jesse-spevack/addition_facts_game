import React, { Component } from 'react';
import XpBar from './XpBar';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div className="px-4">
          <div className="grid grid-cols-2">
            <h1 className="text-sm text-left">{this.props.label}: {this.props.xp} / {this.props.nextLevelXp}</h1>
            <h1 className="text-sm text-right">Level: {this.props.level}</h1>
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