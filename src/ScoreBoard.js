import XpBar from "./XpBar";

const ScoreBoard = ({ score, streak, nextLevelXp, level, xp }) => {
  return (
    <div className="">
      <div className="px-1 grid grid-cols-2">
        <h1 className="text-sm sm:text-base xl:text-lg text-left">
          Score: {score}
        </h1>
        <h1 className="text-sm sm:text-base xl:text-lg text-right">
          Streak: {streak}
        </h1>
        <h1 className="text-sm sm:text-base xl:text-lg text-left">
          XP: {xp} / {nextLevelXp}
        </h1>
        <h1 className="text-sm sm:text-base xl:text-lg text-right">
          Level: {level}
        </h1>
      </div>
      <XpBar xp={xp} nextLevelXp={nextLevelXp} />
    </div>
  );
};

export default ScoreBoard;
