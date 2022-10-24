import React, { Component } from 'react';
import { CheckIcon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

class IconKey extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.handleClick(
      this.props.specialAction
    )
  }

  render () {
    let icon;
    let className;
    if(this.props.icon === "check") {
      icon = <CheckIcon className="inline-flex items-center h-12 w-12 sm:h-16 sm:w-16" area-hidden="true"/>
      className = "cursor-auto h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-transparent bg-emerald-600 text-white shadow-sm active:bg-emerald-700 focus:outline-none focus:ring-0 active:ring-2 active:ring-emerald-500 active:ring-offset-2"
    } else {
      icon = <XMarkIcon className="inline-flex items-center h-12 w-12 sm:h-16 sm:w-16" area-hidden="true"/>
      className = "cursor-auto h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-transparent bg-pink-600 text-white shadow-sm active:bg-pink-700 focus:outline-none focus:ring-0 active:ring-2 active:ring-pink-500 active:ring-offset-2"
    }

    return (
      <div>
        <button
          onClick={this.props.specialAction}
          type="button"
          className={className}
        >
            {icon}         
        </button>    
      </div>
    );
  }
}

export default IconKey;
