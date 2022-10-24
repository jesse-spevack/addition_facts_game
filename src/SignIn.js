import React, { Component } from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isUsernamePresent: false
    }

    this.setName = this.setName.bind(this)
    this.signIn = this.signIn.bind(this)
  }

  signIn () {
    if(this.state.isUsernamePresent) {
      this.props.signIn(this.state.username)
    } 
  }

  setName (e) {
    const username = e.target.value

    this.setState(
      {
        username: username, 
        isUsernamePresent: username !== ""
      }
    )
  }

  render () {
    let buttonClassName = "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm"

    if (this.state.isUsernamePresent) {
      buttonClassName += " hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    } else {
      buttonClassName += " opacity-75"
    }

    return (
      <div className="p-6 font-mono">
        <h1 className="text-8xl">
          Hi! 👋
        </h1>

        <div className="py-4">
          <label htmlFor="email" className="block text-xl font-medium">
            What is your name?
          </label>
          <div className="my-4">
            <input
              type="text"
              name="name"
              id="name"
              className="text-slate-800 block w-3/4 h-8 p-6 rounded-md shadow-sm text-lg focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-slate-800 focus:ring-indigo-600"
              placeholder="Type your name"
              onChange={this.setName}
            />
          </div>
          <button
            type="button"
            className={buttonClassName}
            onClick={this.signIn}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;