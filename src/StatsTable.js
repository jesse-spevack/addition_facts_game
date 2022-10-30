const StatsTable = ({ rawStats }) => {
  const stats = rawStats ? JSON.parse(rawStats) : "";
  const playerHistory = stats ? stats.playerHistory : "";
  const problems = Object.keys(playerHistory).sort();

  const items = problems.map((problem) => {
    const data = playerHistory[problem];
    return (
      <tr key={problem}>
        <td className="whitespace-nowrap text-sm font-medium">{problem}</td>
        <td className="whitespace-nowrap text-center text-sm font-medium">
          {data.correctCount}
        </td>
        <td className="whitespace-nowrap text-center text-sm font-medium">
          {data.fastCorrectCount}
        </td>
        <td className="whitespace-nowrap text-center text-sm font-medium">
          {data.streak}
        </td>
        <td className="whitespace-nowrap text-center text-sm font-medium">
          {data.wrongCount}
        </td>
        <td className="whitespace-nowrap text-center text-sm font-medium">
          {data.retired ? "Y" : "N"}
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr>
            <th
              scope="col"
              className="py-3.5 px-1 text-left text-sm font-semibold"
            >
              Problem
            </th>
            <th
              scope="col"
              className="py-3.5 px-1 text-left text-sm font-semibold"
            >
              Correct
            </th>
            <th
              scope="col"
              className="py-3.5 px-1 text-left text-sm font-semibold"
            >
              Fast
            </th>
            <th
              scope="col"
              className="py-3.5 px-1 text-left text-sm font-semibold"
            >
              Streak
            </th>
            <th
              scope="col"
              className="py-3.5 px-1 text-left text-sm font-semibold"
            >
              Wrong
            </th>
            <th
              scope="col"
              className="py-3.5 px-1 text-left text-sm font-semibold"
            >
              Retired
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">{items}</tbody>
      </table>
    </div>
  );
};

export default StatsTable;
