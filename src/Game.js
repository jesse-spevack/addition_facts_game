import { useEffect, useState } from "react";
import AdditionProblem from "./AdditionProblem";
import Keyboard from "./Keyboard";
import ScoreBoard from "./ScoreBoard";
import Header from "./Header";
import Solution from "./Solution";

import success from "./assets/sonic.mp3";
import failure from "./assets/mario.mp3";
import levelUp from "./assets/level.mp3";

const Game = ({ username, signOut, showStats }) => {
  const [error, setError] = useState(false);
  const [lastTenProblems, setLastTenProblems] = useState([]);
  const [level, setLevel] = useState(1);
  const [max, setMax] = useState(5);
  const [nextLevelXp, setNextLevelXp] = useState(5);
  const [playerHistory, setPlayerHistory] = useState({});
  const [score, setScore] = useState(0);
  const [solution, setSolution] = useState("");
  const [streak, setStreak] = useState(0);
  const [xp, setXp] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [problem, setProblem] = useState({ leftOperand: 1, rightOperand: 2 });
  const [showHint, setShowHint] = useState(false);

  // Sets the largest number the player can see regardless of level.
  const ceiling = username === "eddie" ? 9 : username === "audrey" ? 12 : 10;

  useEffect(() => {
    if (username === "restart") {
      localStorage.clear();
    } else {
      const rawData = localStorage.getItem(username);
      const data = JSON.parse(rawData);
      if (data && data.score && data.score > 0) {
        setPlayerHistory({ ...data.playerHistory });
        setLastTenProblems(data.lastTenProblems);
        setLevel(data.level);
        setMax(data.max);
        setNextLevelXp(data.nextLevelXp);
        setScore(data.score);
        setStreak(data.streak);
        setXp(data.xp);
      }
    }
    setProblem(getNewProblem());
  }, []);

  useEffect(() => {
    if (score > 0) {
      const data = JSON.stringify({
        playerHistory: playerHistory,
        lastTenProblems: lastTenProblems,
        level: level,
        max: max,
        nextLevelXp: nextLevelXp,
        score: score,
        streak: streak,
        xp: xp,
      });
      localStorage.setItem(username, data);
    }
  });

  const min = 0;

  const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const getDifficultyAdjustedNumber = (min, max) => {
    return randomNumberBetween(min, max);
  };

  const getProblemKey = (leftOperand, rightOperand) => {
    return `${leftOperand}+${rightOperand}`;
  };

  const getNewProblem = () => {
    let newProblem = {};
    while (Object.keys(newProblem).length === 0) {
      let leftOperand = getDifficultyAdjustedNumber(min, max);
      let rightOperand = getDifficultyAdjustedNumber(min, max);
      let problemKey = getProblemKey(leftOperand, rightOperand);
      const problemHistory = playerHistory[problemKey];
      const isRetired = problemHistory && problemHistory.retired;
      const firstProblem = lastTenProblems[0];

      if (!isRetired && lastTenProblems.indexOf(problemKey === -1)) {
        let problemQueue = [...lastTenProblems, problemKey];
        if (problemQueue.length >= 10) {
          setLastTenProblems(
            problemQueue.filter((problem) => problem !== firstProblem)
          );
        } else {
          setLastTenProblems(problemQueue);
        }

        newProblem = { leftOperand: leftOperand, rightOperand: rightOperand };
      }
    }

    return newProblem;
  };

  const addSolution = (value) => {
    setError(false);
    setSolution(solution + value);
  };

  const deleteSolution = (value) => {
    setSolution(solution.slice(0, -1));
  };

  const submit = () => {
    if (solution === "") {
      setError(true);
    } else {
      scoreProblem();
    }
  };

  const isSolutionCorrect = () => {
    return (
      parseInt(problem.leftOperand) + parseInt(problem.rightOperand) ===
      parseInt(solution)
    );
  };

  const playSound = (audio) => {
    new Audio(audio).play();
  };

  const scoreProblem = () => {
    const correct = isSolutionCorrect();
    const timeToSolve = (Date.now() - startTime) / 1000.0;
    const fastTimeToSolve = timeToSolve <= 3; // 3 seconds is fast
    let problemKey = getProblemKey(problem.leftOperand, problem.rightOperand);
    let problemStats = playerHistory[problemKey];

    // updatePlayerHistory
    if (problemStats) {
      if (correct) {
        problemStats.correctCount += 1;
        problemStats.streak += 1;
        if (fastTimeToSolve) {
          problemStats.fastCorrectCount += 1;
        }
      }

      const isProblemStreakSignificant = problemStats.streak >= 5;
      const isProblemFastCountSignificant = problemStats.fastCorrectCount >= 5;
      const isProblemCorrectCountSignificant = problemStats.correctCount >= 10;
      const timeToRetireProblem =
        isProblemCorrectCountSignificant ||
        (isProblemStreakSignificant && isProblemFastCountSignificant);

      if (timeToRetireProblem) {
        problemStats.retired = true;
      } else {
        problemStats.wrongCount += 1;
        problemStats.streak = 0;
        problemStats.retired = false;
      }
    } else {
      problemStats = {
        leftOperand: problem.leftOperand,
        rightOperand: problem.rightOperand,
        correctCount: correct ? 1 : 0,
        wrongCount: correct ? 0 : 1,
        streak: correct ? 1 : 0,
        fastCorrectCount: correct && fastTimeToSolve ? 1 : 0,
        retired: false,
      };
    }

    let history = playerHistory;
    history[problemKey] = problemStats;
    setPlayerHistory(history);

    if (correct) {
      playSound(success);

      const newStreak = streak + 1;
      const newScore = score + 1;
      const newXp = xp + 1;
      const isLevelComplete = newXp >= nextLevelXp;

      setStreak(newStreak);
      setScore(newScore);
      setXp(newXp);
      setShowHint(false);

      if (isLevelComplete) {
        playSound(levelUp);

        const newLevel = level + 1;
        const newMax = Math.min(max + 1, ceiling);
        const newNextLevelXp = newLevel * 5;
        setLevel(newLevel);
        setMax(newMax);
        setNextLevelXp(newNextLevelXp);
        setXp(0);
      }

      setProblem(getNewProblem());
      setSolution("");
    } else {
      playSound(failure);
      setSolution("");
      setStreak(0);
      setError(false);
      setShowHint(true);
    }

    setStartTime(Date.now());
  };

  return (
    <div className="">
      <Header signOut={signOut} username={username} showStats={showStats} />
      <div className="px-1 pt-2 sm:px-6">
        <AdditionProblem
          leftOperand={problem.leftOperand}
          rightOperand={problem.rightOperand}
          showHint={showHint}
        />
        <Solution solution={solution} blankSolutionError={error} />
      </div>
      <ScoreBoard
        xp={xp}
        nextLevelXp={nextLevelXp}
        level={level}
        score={score}
        streak={streak}
      />
      <div>
        <Keyboard click={addSolution} erase={deleteSolution} check={submit} />
      </div>
    </div>
  );
};

export default Game;
