import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const user = this.props.user.toLowerCase()
    const firstInitial = user.charAt(0).toUpperCase()
    let className; 
    
    if (user === 'audrey') {
      className = "inline-flex h-6 w-6 items-center justify-center rounded-full bg-pink-500 text-white shadow-sm active:bg-pink-700 focus:outline-none focus:ring-0 active:ring-2 active:ring-pink-500 active:ring-offset-2"
    } else if (user === 'eddie') {
      className = "inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm active:bg-emerald-700 focus:outline-none focus:ring-0 active:ring-2 active:ring-emerald-500 active:ring-offset-2"
    } else {
      className = "inline-flex h-6 w-6 items-center justify-center rounded-full bg-gray-500 text-white shadow-sm active:bg-gray-700 focus:outline-none focus:ring-0 active:ring-2 active:ring-gray-500 active:ring-offset-2"
    }

    return (
      <div className="px-2 pt-2 grid grid-cols-2">
        <div className="grid justify-items-start">
          <div onClick={this.props.showStats} className="h-6 w-6">
            <img src={process.env.PUBLIC_URL + '/math_hop.png'}></img>
          </div>
        </div>
        <div className="grid justify-items-end">
          <span onClick={this.props.signOut} className={className}>
            <span className="text-xs font-bold leading-none">{firstInitial}</span>
          </span>
        </div>
      </div>
    );
  }
}

export default Header;