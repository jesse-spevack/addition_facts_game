import React, { Component } from 'react';
import AdditionProblem from './AdditionProblem';
import Keyboard from './Keyboard';
import ScoreBoard from "./ScoreBoard";
import SignOut from './SignOut';
import Solution from './Solution';

import success from "./assets/sonic.mp3";
import failure from "./assets/mario.mp3";
import levelUp from "./assets/level.mp3";
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

class Game extends Component {
  constructor(props) {
    super(props);

    if(props.user.toLowerCase() === 'restart') {
      localStorage.clear()
    }

    let storedProgress = localStorage.getItem(props.user)
    let streak = 0
    let score = 0
    let level = 1
    let xp = 0
    let nextLevelXp = 5 

    if (storedProgress) {
      storedProgress = JSON.parse(storedProgress)

      streak = storedProgress.streak || 0
      score = storedProgress.score || 0
      level = storedProgress.level || 1
      xp = storedProgress.xp || 0
      nextLevelXp = storedProgress.nextLevelXp || 5
    }

    this.state = {
      leftOperand: 0,
      rightOperand: 0,
      min: 0,
      max: 5,
      solution: "",
      streak: streak,
      score: score,
      level: level,
      xp: xp,
      nextLevelXp: nextLevelXp,
      error: false,
    }

    this.randomNugetDifficultyAdjustedNumbermber = this.getDifficultyAdjustedNumber.bind(this)
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
      let xp = this.state.xp + 1

      const isLevelComplete = xp >= this.state.nextLevelXp

      let level = this.state.level
      let max = this.state.max
      let nextLevelXp = this.state.nextLevelXp

      if(isLevelComplete) {
        new Audio(levelUp).play()
        level += 1
        max += 1
        nextLevelXp = level * 5
        xp = 0 
      }

      this.setState({
        leftOperand: this.getDifficultyAdjustedNumber(),
        rightOperand: this.getDifficultyAdjustedNumber(),
        solution: "",
        streak: newStreak,
        score: newScore,
        error: false,
        max: max,
        level: level,
        nextLevelXp: nextLevelXp,
        xp: xp
      })
    } else {
      new Audio(failure).play()
      this.setState({
        solution: "",
        streak: 0,
        error: false
      })
    }

    this.saveProgress()
  }

  saveProgress() {
    localStorage.setItem(
      this.props.user, JSON.stringify(
        {
          xp: this.state.xp,
          level: this.state.level,
          score: this.state.score,
          streak: this.state.streak,
          nextLevelXp: this.state.nextLevelXp,
        }
      )
    )
  }


  render () {
    this.saveProgress()

    return (
      <div className="">
        <SignOut signOut={this.props.signOut} user={this.props.user}/>
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
          xp={this.state.xp}
          nextLevelXp={this.state.nextLevelXp}
          level={this.state.level}
          score={this.state.score}
          streak={this.state.streak}
        />
        <Keyboard
          handleClick={this.addSolution}
          delete={this.deleteSolution}
          submit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default Game;