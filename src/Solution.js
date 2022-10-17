import React, { Component } from 'react';

class Solution extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="py-2 h-24 col-start-3 col-span-2 row-span-1">
          <div className={this.props.blankSolutionError ? "border-4 border-pink-500 opacity-80 min-h-full mx-36 transition ease-in-out duration-500" : ""}>
            <p className="text-8xl min-h-full font-mono font-semibold text-center">{this.props.solution}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Solution;