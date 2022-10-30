import Key from "./Key";
import IconKey from "./IconKey";

const KeyBoard = ({ click, erase, check }) => {
  const numbers = [...Array(9).keys()];
  const keys = numbers.map((number) => (
    <Key click={click} key={number} number={number + 1} />
  ));

  return (
    <div className="px-6 pt-3 grid grid-cols-3 gap-y-2 justify-items-center">
      {keys}
      <IconKey click={erase} />
      <div>
        <Key click={click} number={0} />
      </div>
      <IconKey icon="check" click={check} />
    </div>
  );
};

export default KeyBoard;
