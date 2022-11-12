import Hint from "./hint";

const AdditionProblem = ({ leftOperand, rightOperand, showHint }) => {
  const hintClassName = showHint ? "" : "hidden";
  let additionProblemClassName =
    "grid grid-cols-3 grid-rows-2 gap-1 sm:text-9xl text-right ";
  additionProblemClassName += showHint ? "text-4xl" : "text-7xl";

  return (
    <div>
      <div className={hintClassName}>
        <Hint rightOperand={rightOperand} leftOperand={leftOperand} />
      </div>
      <div className={additionProblemClassName}>
        <div className="col-span-1 row-span-2 sm:ml-14 self-center">
          <p>+</p>
        </div>
        <div className="col-span-1 row-span-1">
          <p>{leftOperand}</p>
        </div>
        <div className="col-span-1 col-start-2 row-span-1 row-start-2 border-b-8">
          <p>{rightOperand}</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionProblem;
