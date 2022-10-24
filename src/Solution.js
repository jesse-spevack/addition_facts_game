import React, { Component } from 'react';

class Solution extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="pt-1 grid grid-cols-3">
        <div className="col-start-2 row-start-1 h-20">
          <p className="text-7xl sm:text-9xl font-mono font-semibold text-center">{this.props.solution}</p>
        </div>
        <div className={this.props.blankSolutionError ? "border-4 border-lime-400 z-10 rounded-lg col-start-2 row-start-1 h-20 sm:h-36 xl:mx-96" : ""}/>
        <div className={this.props.blankSolutionError ? "border-4 border-lime-600 z-0 blur -inset-0.5 rounded-lg col-start-2 row-start-1 h-20 sm:h-36 xl:mx-96" : ""}/>
      </div>
    );
  }
}

export default Solution;