import React, { Component } from 'react';

class AdditionProblem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div className="grid grid-cols-6 grid-rows-2 gap-0">
          <div className="col-start-2 sm:col-start-3 col-span-1 row-span-2 sm:border-b-8 sm:ml-14">
            <p className="text-8xl sm:text-9xl font-mono font-semibold text-right pt-14 sm:pt-20">+</p>
          </div>
          <div className="col-start-3 sm:col-start-4 col-span-2 sm:col-span-1 row-span-1 sm:mr-14">
            <p className="text-8xl sm:text-9xl font-mono font-semibold text-right">{this.props.leftOperand}</p>
          </div>
          <div className="col-start-3 sm:col-start-4 col-span-2 sm:col-span-1 row-span-1 border-b-8 sm:mr-14">
            <p className="text-8xl sm:text-9xl font-mono font-semibold text-right">{this.props.rightOperand}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdditionProblem;