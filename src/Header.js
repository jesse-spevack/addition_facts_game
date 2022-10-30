const Header = ({ user, showStats, signOut }) => {
  const username = user.toLowerCase();
  const firstInitial = user.charAt(0).toUpperCase();
  let className =
    "inline-flex h-6 w-6 items-center justify-center rounded-full text-white shadow-sm focus:outline-none focus:ring-0 active:ring-2 active:ring-offset-2";
  if (username === "audrey") {
    className += " bg-pink-500 active:bg-pink-700 active:ring-pink-500";
  } else if (username === "eddie") {
    className +=
      " bg-emerald-500 active:bg-emerald-700 active:ring-emerald-500";
  } else {
    className += " bg-gray-500 active:bg-gray-700 active:ring-gray-500";
  }

  return (
    <div className="px-2 pt-2 grid grid-cols-2">
      <div className="grid justify-items-start">
        <div onClick={showStats} className="h-6 w-6">
          <img src={process.env.PUBLIC_URL + "/math_hop.png"}></img>
        </div>
      </div>
      <div className="grid justify-items-end">
        <span onClick={signOut} className={className}>
          <span className="text-xs font-bold leading-none">{firstInitial}</span>
        </span>
      </div>
    </div>
  );
};

export default Header;
