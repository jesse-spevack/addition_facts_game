import React, { Component } from 'react';

class Solution extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="py-1 h-24 sm:h-36 col-start-3 col-span-2 row-span-1 xl:mx-96">
          <div className={this.props.blankSolutionError ? "border-4 border-pink-500 opacity-80 min-h-full mx-36 sm:mx-[450px] sm:my-3 xl:my-1 transition ease-in-out duration-500" : ""}>
            <p className="text-8xl sm:text-9xl min-h-full font-mono font-semibold text-center">{this.props.solution}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Solution;