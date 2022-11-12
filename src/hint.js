const Hint = ({ leftOperand, rightOperand }) => {
  const leftOperandInt = parseInt(leftOperand);
  const rightOperandInt = parseInt(rightOperand);
  const solution = leftOperandInt + rightOperandInt;
  let solutionArray = [];
  for (var i = 1; i <= solution; i++) {
    solutionArray.push(i);
  }

  let numbersArray = [];
  for (var i = 1; i <= 10; i++) {
    numbersArray.push(i);
  }

  const numbers = numbersArray.map((i) => {
    return <div className="px-3 pb-1 text-white text-sm">{i}</div>;
  });

  const blocks = solutionArray.map((i) => {
    const colorLevel =
      i <= leftOperand
        ? "bg-fuchsia-500 text-fuchsia-500"
        : "bg-fuchsia-300 text-slate-800 font-bold";

    const text = i;
    // const colorLevel = "600";
    return <div className={"px-3 " + colorLevel}>{"+"}</div>;
  });

  return (
    <div className="px-6 pb-2 grid grid-cols-10 gap-y-1 gap-x-2 text-xs justify-items-center">
      {numbers}
      {blocks}
    </div>
  );
};

export default Hint;
