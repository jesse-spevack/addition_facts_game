import React, { Component } from 'react';

class AdditionProblem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="grid grid-cols-3 grid-rows-2 gap-1 font-mono text-7xl sm:text-9xl text-right">
          <div className="col-span-1 row-span-2 sm:ml-14 self-center">
            <p>+</p>
          </div>
          <div className="col-span-1 row-span-1">
            <p>{this.props.leftOperand}</p>
          </div>
          <div className="col-span-1 col-start-2 row-span-1 row-start-2 border-b-8">
            <p>{this.props.rightOperand}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdditionProblem;