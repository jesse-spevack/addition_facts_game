import { hasSelectionSupport } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react';

class Key extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.handleClick(
      this.props.number
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick} type="button" className="cursor-auto inline-block items-center h-14 w-14 overflow-hidden rounded-full border border-transparent bg-indigo-600 text-white shadow-sm active:bg-indigo-700 focus:outline-none focus:ring-0 active:ring-2 active:ring-indigo-500 active:ring-offset-2">
          <p className="text-3xl font-mono text-center">
            {this.props.number}
          </p>
        </button>
      </div>
    );
  }
}

export default Key;
