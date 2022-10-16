import React, { Component } from 'react';

class Solution extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="py-2 h-24 col-start-3 col-span-2 row-span-1">
          <p class="text-8xl min-h-full font-mono font-semibold text-center">{this.props.solution}</p>
        </div>
      </div>
    );
  }
}

export default Solution;