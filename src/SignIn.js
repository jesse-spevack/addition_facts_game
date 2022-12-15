import { useState } from "react";

const SignIn = ({ signIn }) => {
  const [username, setUsername] = useState("");
  const [isUsernamePresent, setIsUsernamePresent] = useState(false);

  let buttonClassName =
    "inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-white font-semibold shadow-sm";
  let inputClassName =
    "h-8 py-6 text-slate-800 text-center block rounded-md shadow-sm text-lg focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-slate-800 focus:ring-indigo-600";

  if (isUsernamePresent) {
    buttonClassName +=
      " hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2";
  } else {
    buttonClassName += " opacity-50";
  }

  return (
    <div className="p-6 rounded-lg h-screen container mx-auto">
      <div className="grid gap-4 place-items-center">
        <h1 className="text-xl text-center">Welcome to</h1>
        <div className="h-36 w-36">
          <img
            src={process.env.PUBLIC_URL + "/math_hop.png"}
            alt="Math Hop Logo"
          ></img>
        </div>
        <h1 className="text-5xl text-center font-semibold">
          <span className="text-transparent bg-gradient-to-r bg-clip-text from-indigo-500 to-fuchsia-500">
            MathHop
          </span>
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signIn(username.trim());
          }}
          autoComplete="off"
        >
          <input
            type="text"
            name="name"
            id="name"
            className={inputClassName}
            placeholder="What is your name?"
            onChange={(e) => {
              setUsername(e.target.value);
              setIsUsernamePresent(!!username);
            }}
          />
          <div className="grid p-5 place-items-center">
            <button
              disabled={!isUsernamePresent}
              type="submit"
              className={buttonClassName}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
