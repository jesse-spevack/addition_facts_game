import React, { Component } from 'react';
import Keys from './Keys';
import Key from './Key';
import { XMarkIcon as XMarkIconOutline } from '@heroicons/react/24/outline'
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
        <div className="pl-10 py-4 overflow-hidden">
          <Keys handleClick={this.handleClick} />
          <div className="px-5 py-3 grid grid-cols-3 gap-3">
            <button onClick={this.delete} type="button" className="p-3 inline-block items-center h-14 w-14 overflow-hidden rounded-full border border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 active:outline-none active:ring-2 active:ring-indigo-500 active:ring-offset-2">
              <XMarkIconOutline className="h-8 w-8" area-hidden="true"/>
            </button>    
            <Key handleClick={this.handleClick} number={0}/>
            <button onClick={this.submit} type="button" className="p-3 inline-block items-center h-14 w-14 overflow-hidden rounded-full border border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 active:outline-none active:ring-2 active:ring-indigo-500 active:ring-offset-2">
              <CheckIconOutline className="h-8 w-8" area-hidden="true"/>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Keyboard;
