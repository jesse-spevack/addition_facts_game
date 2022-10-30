const Key = ({ number, click }) => {
  return (
    <div className="">
      <button
        onClick={(e) => click(number)}
        type="button"
        className="cursor-auto h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-transparent bg-indigo-600 text-white shadow-sm active:bg-indigo-700 focus:outline-none focus:ring-0 active:ring-2 active:ring-indigo-500 active:ring-offset-2"
      >
        <p className="text-4xl sm:text-5xl text-center">{number}</p>
      </button>
    </div>
  );
};

export default Key;
