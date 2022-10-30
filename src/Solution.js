const Solution = ({ solution, blankSolutionError }) => {
  // Creates a glowing affect
  const topGreenBorderClassName = blankSolutionError
    ? "border-4 border-lime-400 z-10 rounded-lg col-start-2 row-start-1 h-20"
    : "";
  const bottomGreenBorderClassName = blankSolutionError
    ? "border-4 border-lime-600 z-0 blur -inset-0.5 rounded-lg col-start-2 row-start-1 h-20"
    : "";

  return (
    <div className="pt-1 grid grid-cols-3">
      <div className="col-start-2 row-start-1 h-20">
        <p className="text-7xl sm:text-9xl font-semibold text-center">
          {solution}
        </p>
      </div>
      <div className={topGreenBorderClassName} />
      <div className={bottomGreenBorderClassName} />
    </div>
  );
};

export default Solution;
