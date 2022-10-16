import React, { Component } from 'react';
import Keys from './Keys';
import Key from './Key';
import { BackspaceIcon as BackspaceIconOutline } from '@heroicons/react/24/outline'
import { CheckIcon as CheckIconOutline } from '@heroicons/react/24/outline'

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
        <div className="p-6 overflow-hidden rounded-lg shadow">
          <Keys handleClick={this.handleClick} />
          <div className="px-12 grid grid-cols-3 gap-4">
            <button onClick={this.delete} type="button" className="m-6 inline-block items-center h-60 w-60 overflow-hidden rounded-full border border-transparent bg-indigo-600 p-9 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <BackspaceIconOutline className="h-40 w460" area-hidden="true"/>
            </button>
            <Key handleClick={this.handleClick} number={0}/>
            <button id="check" onClick={this.submit} type="button" className="m-6 inline-block items-center h-60 w-60 overflow-hidden rounded-full border border-transparent bg-indigo-600 p-9 text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <CheckIconOutline className="h-40 w460" area-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;
