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
            <p class="text-[172px] font-mono font-semibold text-right pt-48">+</p>
          </div>
          <div className="col-start-3 col-span-2 row-span-1der">
            <p class="text-[172px] font-mono font-semibold text-center">{this.props.leftOperand}</p>
          </div>
          <div className="col-start-3 col-span-2 row-span-1 border-b-8">
            <p class="text-[172px] font-mono font-semibold text-center">{this.props.rightOperand}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AdditionProblem;