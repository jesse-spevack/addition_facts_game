import React, { Component } from 'react';
import AdditionProblem from './AdditionProblem';
import Solution from './Solution';
import Keyboard from './Keyboard';
import metadata from './metadata.json'
import success from "./assets/sonic.mp3"
import failure from "./assets/mario.mp3"
import level from "./assets/level.mp3"

class App extends Component {
  constructor() {
    super();
    this.state = {
      leftOperand: 0,
      rightOperand: 0,
      solution: "",
      streak: 0,
      score: 0,
      feedback: "⚡ Let's get started! ⚡",
      min: 0,
      max: 5,
      level: 1,
    }

    this.randomNugetDifficultyAdjustedNumbermber = this.getDifficultyAdjustedNumber.bind(this)
    this.getPositiveFeedback = this.getPositiveFeedback.bind(this)
    this.isTimeToIncreaseDifficulty = this.isTimeToIncreaseDifficulty.bind(this)
    this.addSolution = this.addSolution.bind(this)
    this.deleteSolution = this.deleteSolution.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.setState({
      leftOperand: this.getDifficultyAdjustedNumber(),
      rightOperand: this.getDifficultyAdjustedNumber(),
    })
  }

  getDifficultyAdjustedNumber() {
    return this.randomNumberBetween(this.state.min, this.state.max)
  }

  randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  addSolution(value) {
    let solution = this.state.solution + value
    this.setState({solution: solution})
  }

  deleteSolution() {
    let solution = this.state.solution.slice(0, -1)
    this.setState({solution: solution})
  }

  getPositiveFeedback() {
    const feedback = ["⚡", "😀", "😁", "🚀", "🎉", "✨", "🔥", "🥳", "🎊", "🙌", "🫶", "⭐", "🤩", "🦄", "🐉", "🌟", "🌈", "🥳", "😎", "🤓", "🤖", "👍", "🙏", "🧠", "🧑‍🎓", "🦸", "🧙", "💃", "👑"]
    const randomIndex = Math.floor(Math.random() * feedback.length)
    return feedback[randomIndex]
  }

  isTimeToIncreaseDifficulty() {
    const isSteakAlive = this.state.streak > 0;
    const isLevelComplete = this.state.streak % 10 == 0
    return isSteakAlive && isLevelComplete
  }

  isSolutionBlank() {
    return this.state.solution === ""
  }

  isSolutionCorrect() {
    return parseInt(this.state.solution) === (this.state.leftOperand + this.state.rightOperand)
  }

  handleSubmit() {
    if (this.isSolutionBlank()) {
      return
    }
    else if (this.isSolutionCorrect()) {
      new Audio(success).play()
      this.setState({
        leftOperand: this.getDifficultyAdjustedNumber(),
        rightOperand: this.getDifficultyAdjustedNumber(),
        solution: "",
        streak: this.state.streak + 1,
        score: this.state.score + 1,
        feedback: this.getPositiveFeedback() 
      })
    } else {
      new Audio(failure).play()
      this.setState({
        solution: "",
        streak: 0,
        feedback: "❌",
        min: 0,
        max: 5
      })
    }

    if(this.isTimeToIncreaseDifficulty()) {
      const newMax = this.state.max + 1
      const newLevel = this.state.level + 1
      new Audio(level).play()

      console.log("Increasing difficulty. New max is: ", newMax)
      this.setState({
        max: newMax,
        level: newLevel 
      })
    }
  }


  render () {
    return (
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 text-white bg-slate-800">
        <div className="overflow-hidden rounded-lg bg-slate-700 shadow">
          <div className="p-1 grid grid-cols-2">
            <div className="p-4">
              <h1 className={this.state.score == 0 ? "text-sm text-left" : "text-4xl text-left"}>{this.state.feedback}</h1>
            </div>
            <div className="p-1">
              <h1 className="text-sm text-right">Score: {this.state.score}</h1>
              <h1 className="text-sm text-right">Streak: {this.state.streak}</h1>
              <h1 className="text-sm text-right">Level: {this.state.level}</h1>
            </div>
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
        <div className="p-1">
          <p className="text-xs text-right">Version: {metadata.buildMajor}.{metadata.buildMinor}.{metadata.buildRevision} {metadata.buildTag}</p>
        </div>
      </div>
    )
  }
}

export default App;