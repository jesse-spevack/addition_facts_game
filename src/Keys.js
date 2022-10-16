import React, { Component } from 'react';
import Key from './Key';

class Keys extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(number) {
    this.props.handleClick(number)
  }

  render () {
    const displayKeys = [...Array(9).keys()].map((number) => {
      return (
        <Key 
          key={number}
          number={number+1}
          handleClick={this.handleClick}
        />
      )
    })

    return (
      <div className="px-5 grid grid-cols-3 gap-4">
        {displayKeys}
      </div>
    );
  }
}

export default Keys;
