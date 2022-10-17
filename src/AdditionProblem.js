import React, { Component } from 'react';

class AdditionProblem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="grid grid-cols-6 grid-rows-2 gap-4">
          <div className="col-start-2 col-span-1 row-span-2">
            <p className="text-8xl font-mono font-semibold text-right pt-14">+</p>
          </div>
          <div className="col-start-3 col-span-2 row-span-1der">
            <p className="text-8xl font-mono font-semibold text-right">{this.props.leftOperand}</p>
          </div>
          <div className="col-start-3 col-span-2 row-span-1 border-b-8">
            <p className="text-8xl font-mono font-semibold text-right">{this.props.rightOperand}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdditionProblem;