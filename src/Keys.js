import React, { Component } from 'react';
import Key from './Key';
import IconKey from './IconKey';

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
      <div className="px-4 pt-1 grid grid-cols-3 gap-y-2 justify-items-center">
        {displayKeys}
        <IconKey 
          specialAction={this.props.delete}
        />
        <div>
          <Key handleClick={this.handleClick} number={0}/>
        </div>
        <IconKey
          icon="check"
          specialAction={this.props.submit}
        />
      </div>
    );
  }
}

export default Keys;
