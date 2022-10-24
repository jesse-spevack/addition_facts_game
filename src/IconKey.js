import React, { Component } from 'react';
import { XMarkIcon as XMarkIconOutline } from '@heroicons/react/24/outline'
import { CheckIcon as CheckIconOutline } from '@heroicons/react/24/outline'

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
      icon = <CheckIconOutline className="inline-flex items-center h-12 w-12 sm:h-16 sm:w-16" area-hidden="true"/>
      className = "cursor-auto h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-transparent bg-emerald-600 text-white shadow-sm hover:bg-emerald-700 active:outline-none active:ring-2 active:ring-emerald-500 active:ring-offset-2"
    } else {
      icon = <XMarkIconOutline className="inline-flex items-center h-12 w-12 sm:h-16 sm:w-16" area-hidden="true"/>
      className = "cursor-auto h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-transparent bg-pink-600 text-white shadow-sm hover:bg-pink-700 active:outline-none active:ring-2 active:ring-pink-500 active:ring-offset-2"
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
