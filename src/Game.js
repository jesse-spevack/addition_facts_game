import React, { Component } from "react";
import AdditionProblem from "./AdditionProblem";
import Keyboard from "./Keyboard";
import ScoreBoard from "./ScoreBoard";
import Header from "./Header";
import Solution from "./Solution";

import success from "./assets/sonic.mp3";
import failure from "./assets/mario.mp3";
import levelUp from "./assets/level.mp3";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

class Game extends Component {
  constructor(props) {
    super(props);

    if (props.user.toLowerCase() === "restart") {
      localStorage.clear();
    }

    let storedProgress = localStorage.getItem(props.user);
    let streak = 0;
    let score = 0;
    let level = 1;
    let xp = 0;
    let nextLevelXp = 5;
    let max = 5;
    let playerHistory = {};
    let lastTenProblems = [];

    if (storedProgress) {
      storedProgress = JSON.parse(storedProgress);
      streak = storedProgress.streak || streak;
      score = storedProgress.score || score;
      level = storedProgress.level || level;
      xp = storedProgress.xp || xp;
      nextLevelXp = storedProgress.nextLevelXp || nextLevelXp;
      max = storedProgress.max || max;
      playerHistory = storedProgress.playerHistory || playerHistory;
      lastTenProblems = storedProgress.lastTenProblems || lastTenProblems;
    }

    this.state = {
      leftOperand: 0,
      rightOperand: 0,
      min: 0,
      max: max,
      solution: "",
      streak: streak,
      score: score,
      level: level,
      xp: xp,
      nextLevelXp: nextLevelXp,
      error: false,
      playerHistory: playerHistory,
      lastTenProblems: lastTenProblems,
    };

    this.randomNugetDifficultyAdjustedNumbermber =
      this.getDifficultyAdjustedNumber.bind(this);
    this.addSolution = this.addSolution.bind(this);
    this.deleteSolution = this.deleteSolution.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let newProblem = this.getNewProblem();
    this.setState({
      leftOperand: newProblem.leftOperand,
      rightOperand: newProblem.rightOperand,
      startTime: Date.now(),
    });
  }

  getDifficultyAdjustedNumber() {
    return this.randomNumberBetween(this.state.min, this.state.max);
  }

  getNewProblem() {
    let lastTenProblems = this.state.lastTenProblems;
    let newProblem = {};

    while (Object.keys(newProblem).length === 0) {
      let leftOperand = this.getDifficultyAdjustedNumber();
      let rightOperand = this.getDifficultyAdjustedNumber();
      let problemKey = this.getProblemKey(leftOperand, rightOperand);
      let problemHistory = this.state.playerHistory[problemKey];
      let isRetired = !!(problemHistory && problemHistory.retired);

      // If the problem is not in the array of lastTenProblems
      if (!isRetired && lastTenProblems.indexOf(problemKey) == -1) {
        // If the array of lastTenProblems is 10 elements long
        if (lastTenProblems.length === 10) {
          lastTenProblems.shift();
        }

        lastTenProblems.push(problemKey);
        newProblem = { leftOperand: leftOperand, rightOperand: rightOperand };
      }
    }

    return newProblem;
  }

  randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  addSolution(value) {
    let solution = this.state.solution + value;
    this.setState({ solution: solution, error: false });
  }

  deleteSolution() {
    let solution = this.state.solution.slice(0, -1);
    this.setState({ solution: solution });
  }

  isSolutionBlank() {
    return this.state.solution === "";
  }

  isSolutionCorrect() {
    return (
      parseInt(this.state.solution) ===
      this.state.leftOperand + this.state.rightOperand
    );
  }

  getProblemKey(leftOperand, rightOperand) {
    return `${leftOperand}+${rightOperand}`;
  }

  scoreProblem() {
    const correct = this.isSolutionCorrect();
    const oldLeftOperand = this.state.leftOperand;
    const oldRightOperand = this.state.rightOperand;
    const oldPlayerHistory = this.state.playerHistory;
    let timeToSolve = (Date.now() - this.state.startTime) / 1000.0;
    let fastTimeToSolve = timeToSolve <= 3; // 3 seconds is fast
    let problemKey = this.getProblemKey(oldLeftOperand, oldRightOperand);
    let problem = oldPlayerHistory[problemKey];
    // problem
    // {
    //   leftOperand:,
    //   rightOperand:,
    //   correctCount:,
    //   wrongCount:,
    //   fastCorrectCount:,
    //   retired:,
    // }
    if (problem) {
      if (correct) {
        problem.correctCount += 1;
        problem.streak += 1;
        if (fastTimeToSolve) {
          problem.fastCorrectCount += 1;
        }

        // If player has answered the question correctly 10 times in a row
        const isProblemStreakSignificant = problem.streak >= 5;
        const isProblemFastCountSignificant = problem.fastCorrectCount >= 5;
        const isProblemCorrectCountSignificant = problem.correctCount >= 10;
        const timeToRetireProblem =
          isProblemCorrectCountSignificant ||
          (isProblemStreakSignificant && isProblemFastCountSignificant);

        if (timeToRetireProblem) {
          problem.retired = true;
        }
      } else {
        problem.wrongCount += 1;
        problem.streak = 0;
        problem.retired = false;
      }
    } else {
      problem = {
        leftOperand: oldLeftOperand,
        rightOperand: oldRightOperand,
        correctCount: correct ? 1 : 0,
        wrongCount: correct ? 0 : 1,
        streak: correct ? 1 : 0,
        fastCorrectCount: correct && fastTimeToSolve ? 1 : 0,
        retired: false,
      };
    }

    let playerHistory = oldPlayerHistory;
    playerHistory[problemKey] = problem;

    if (correct) {
      new Audio(success).play();

      const newStreak = this.state.streak + 1;
      const newScore = this.state.score + 1;
      let xp = this.state.xp + 1;

      const isLevelComplete = xp >= this.state.nextLevelXp;

      let level = this.state.level;
      let max = this.state.max;
      let nextLevelXp = this.state.nextLevelXp;

      if (isLevelComplete) {
        new Audio(levelUp).play();
        level += 1;
        max += 1;
        nextLevelXp = level * 5;
        xp = 0;
      }

      let newProblem = this.getNewProblem();

      this.setState(
        {
          leftOperand: newProblem.leftOperand,
          rightOperand: newProblem.rightOperand,
          solution: "",
          streak: newStreak,
          score: newScore,
          error: false,
          max: max,
          level: level,
          nextLevelXp: nextLevelXp,
          xp: xp,
          playerHistory: playerHistory,
          startTime: Date.now(),
        },
        this.saveProgress()
      );
    } else {
      new Audio(failure).play();
      this.setState(
        {
          solution: "",
          streak: 0,
          error: false,
          playerHistory: playerHistory,
          startTime: Date.now(),
        },
        this.saveProgress()
      );
    }
  }

  handleSubmit() {
    if (this.isSolutionBlank()) {
      this.setState({ error: true });
      return;
    } else {
      this.scoreProblem();
    }
  }

  saveProgress() {
    const data = {
      xp: this.state.xp,
      level: this.state.level,
      score: this.state.score,
      streak: this.state.streak,
      nextLevelXp: this.state.nextLevelXp,
      max: this.state.max,
      playerHistory: this.state.playerHistory,
      lastTenProblems: this.state.lastTenProblems,
    };

    localStorage.setItem(this.props.user, JSON.stringify(data));
  }

  render() {
    this.saveProgress();

    return (
      <div className="">
        <Header
          signOut={this.props.signOut}
          user={this.props.user}
          showStats={this.props.showStats}
        />
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
    );
  }
}

export default Game;
