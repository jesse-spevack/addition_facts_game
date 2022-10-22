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
    if(this.props.icon === "check") {
      icon = <CheckIconOutline className="inline-flex items-center h-12 w-12 sm:h-16 sm:w-16" area-hidden="true"/>
    } else {
      icon = <XMarkIconOutline className="inline-flex items-center h-12 w-12 sm:h-16 sm:w-16" area-hidden="true"/>
    }

    return (
      <div>
        <button
          onClick={this.props.specialAction}
          type="button"
          className="cursor-auto h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-transparent bg-indigo-600 text-white shadow-sm hover:bg-indigo-700 active:outline-none active:ring-2 active:ring-indigo-500 active:ring-offset-2"
        >
            {icon}         
        </button>    
      </div>
    );
  }
}

export default IconKey;
