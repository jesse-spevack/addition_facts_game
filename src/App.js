import React, { Component } from 'react';
import AdditionProblem from './AdditionProblem';
import Solution from './Solution';
import Keyboard from './Keyboard';
import success from "./assets/sonic.mp3";
import failure from "./assets/mario.mp3";
import levelUp from "./assets/level.mp3";
import ScoreBoard from "./ScoreBoard";
import VersionFooter from "./VersionFooter";

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
      error: false,
    }

    this.randomNugetDifficultyAdjustedNumbermber = this.getDifficultyAdjustedNumber.bind(this)
    this.getPositiveFeedback = this.getPositiveFeedback.bind(this)
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
    this.setState({solution: solution, error: false})
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

  isSolutionBlank() {
    return this.state.solution === ""
  }

  isSolutionCorrect() {
    return parseInt(this.state.solution) === (this.state.leftOperand + this.state.rightOperand)
  }

  handleSubmit() {
    if (this.isSolutionBlank()) {
      this.setState({error: true})
      return
    }
    else if (this.isSolutionCorrect()) {
      new Audio(success).play()

      const newStreak = this.state.streak + 1
      const newScore = this.state.score + 1
      const isLevelComplete = newStreak % 10 == 0
      let level = this.state.level
      let max = this.state.max

      if(isLevelComplete) {
        new Audio(levelUp).play()
        level += 1
        max += 1
      }

      this.setState({
        leftOperand: this.getDifficultyAdjustedNumber(),
        rightOperand: this.getDifficultyAdjustedNumber(),
        solution: "",
        streak: newStreak,
        score: newScore,
        feedback: this.getPositiveFeedback(),
        error: false,
        max: max,
        level: level
      })
    } else {
      new Audio(failure).play()
      this.setState({
        solution: "",
        streak: 0,
        feedback: "❌",
        error: false
      })
    }
  }


  render () {
    return (
      <div className="mx-auto text-white bg-slate-800">
        <div className="overflow-hidden bg-slate-700 shadow">
          <div className="px-1 pt-2 sm:px-6">
            <AdditionProblem
              leftOperand={this.state.leftOperand}
              rightOperand={this.state.rightOperand}
            />
            <Solution 
              solution={this.state.solution}
              blankSolutionError={this.state.error}
            />
          </div>
          <ScoreBoard 
            label="XP"
            xp={this.state.streak % 10}
            nextLevelXp="10"
            level={this.state.level}
            score={this.state.score}
            streak={this.state.streak}
          />
        </div>
        <Keyboard
          handleClick={this.addSolution}
          delete={this.deleteSolution}
          submit={this.handleSubmit}
        />
        <VersionFooter/>
      </div>
    )
  }
}

export default App;