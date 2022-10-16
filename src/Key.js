import React, { Component } from 'react';

class Key extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.handleClick(
      this.props.number
    )
  }

  render () {
    return (
      <div>
        <button onClick={this.handleClick} type="button" className="inline-block items-center h-20 w-20 overflow-hidden rounded-full border border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <p className="text-5xl font-mono text-center">
            {this.props.number}
          </p>
        </button>
      </div>
    );
  }
}

export default Key;
