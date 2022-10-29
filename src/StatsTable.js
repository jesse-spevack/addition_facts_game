import React, { Component } from "react";

class StatsTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stats = JSON.parse(this.props.stats);
    const playerHistory = stats.playerHistory;
    const playerHistoryValues = Object.values(playerHistory);
    const statistics = playerHistoryValues.map((val) => (
      <div className="text-sm grid grid-cols-4 p-3">
        <div className="col-span-4 grid place-items-center">
          <h1 className="text-base font-bold">
            {val.leftOperand} + {val.rightOperand}
          </h1>
        </div>

        <div className="">
          <span>Correct: </span>
        </div>
        <div className="font-bold text-center text-sm">
          <span>{val.correctCount}</span>
        </div>
        <div className="">
          <span>Incorrect: </span>
        </div>
        <div className="font-bold text-center">
          <span>{val.wrongCount}</span>
        </div>
        <div className="">
          <span>Fast: </span>
        </div>
        <div className="font-bold text-center">
          <span>{val.fastCorrectCount}</span>
        </div>
        <div className="">
          <span>streak: </span>
        </div>
        <div className="font-bold text-center">
          <span>{val.streak}</span>
        </div>
      </div>
    ));

    return <div className="">{statistics}</div>;
  }
}

export default StatsTable;
