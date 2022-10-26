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
        username: username.toLowerCase(), 
        isUsernamePresent: username !== ""
      }
    )
  }

  render () {
    let buttonClassName = "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base text-white shadow-sm"

    if (this.state.isUsernamePresent) {
      buttonClassName += " hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    } else {
      buttonClassName += " opacity-75"
    }

    return (
      <div className="p-6">
        <div className="rounded-lg bg-slate-900">
          <div className="px-4 py-5 sm:p-6">
            <h1 className="text-xl text-center">
              Welcome to
            </h1>
            <div className="p-6 grid justify-items-center">
              <div className="content-center h-36 w-36">
                <img className="" src={process.env.PUBLIC_URL + '/math_hop.png'}></img>
              </div>
              <h1 className="text-5xl text-center font-semibold ">
                <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 to-fuchsia-500">
                  MathHop
                </span>
              </h1>
              <div className="p-6">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-slate-800 block text-center h-8 p-6 rounded-md shadow-sm text-lg focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-slate-800 focus:ring-indigo-600"
                  placeholder="What is your name?"
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
        </div>
      </div>
    );
  }
}

export default SignIn;