import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";

class Key extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.handleClick(this.props.number);
  }

  render() {
    return (
      <div className="">
        <button
          onClick={this.handleClick}
          type="button"
          className="cursor-auto h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-transparent bg-indigo-600 text-white shadow-sm active:bg-indigo-700 focus:outline-none focus:ring-0 active:ring-2 active:ring-indigo-500 active:ring-offset-2"
        >
          <p className="text-4xl sm:text-5xl text-center">
            {this.props.number}
          </p>
        </button>
      </div>
    );
  }
}

export default Key;
