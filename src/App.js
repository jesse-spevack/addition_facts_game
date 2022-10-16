import React, { Component } from 'react';
import AdditionProblem from './AdditionProblem';
import Solution from './Solution';
import Keyboard from './Keyboard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      leftOperand: 0,
      rightOperand: 0,
      solution: "",
      streak: 0,
      score: 0,
    }

    this.randomNumber = this.randomNumber.bind(this)
    this.addSolution = this.addSolution.bind(this)
    this.deleteSolution = this.deleteSolution.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      leftOperand: this.randomNumber(),
      rightOperand: this.randomNumber(),
    })
  }

  randomNumber() {
    return Math.floor(Math.random() * 12)
  }

  addSolution(value) {
    let solution = this.state.solution + value
    this.setState({solution: solution})
  }

  deleteSolution() {
    let solution = this.state.solution.slice(0, -1)
    this.setState({solution: solution})
  }

  handleSubmit() {
    console.log("Handling submit")
    if (parseInt(this.state.solution) === (this.state.leftOperand + this.state.rightOperand)) {
      this.setState({
        leftOperand: this.randomNumber(),
        rightOperand: this.randomNumber(),
        solution: "",
        streak: this.state.streak + 1,
        score: this.state.streak + 1,
      })
    } else {
      this.setState({
        solution: "",
        streak: 0,
      })
    }
  }


  render () {
    return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 text-white bg-slate-800">
        <div className="overflow-hidden rounded-lg bg-slate-700 shadow">
          <div className="p-6">
            <h1 className="text-sm text-right">Total Score: {this.state.score}</h1>
            <h1 className="text-sm text-right">Current Streak: {this.state.streak}</h1>
          </div>
          <div className="px-1 py-2">
            <AdditionProblem
              leftOperand={this.state.leftOperand}
              rightOperand={this.state.rightOperand}
            />
            <Solution 
              solution={this.state.solution}
            />
          </div>
        </div>
        <Keyboard
          handleClick={this.addSolution}
          delete={this.deleteSolution}
          submit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default App;