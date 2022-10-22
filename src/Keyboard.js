import React, { Component } from 'react';
import Keys from './Keys';
import Key from './Key';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
    this.delete = this.delete.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleClick(number) {
    this.props.handleClick(number)
  }

  delete() {
    this.props.delete()
  }

  submit() {
    this.props.submit()
  }

  render () {
    return (
      <div>
        <Keys
          handleClick={this.handleClick}
          delete={this.delete}
          submit={this.submit}
        />
      </div>
    );
  }
}

export default Keyboard;
