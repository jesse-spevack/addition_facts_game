import StatsTable from "./StatsTable";

const Stats = ({ user, rawStats, back }) => {
  return (
    <div className="container auto-mx p-6">
      <h1 className="text-lg text-center">
        {user.charAt(0).toUpperCase() + user.slice(1)}'s Statistics:
      </h1>
      <StatsTable rawStats={rawStats} />
      <div className="pt-5 grid place-items-center">
        <button
          type="submit"
          className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-white font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          onClick={back}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Stats;
