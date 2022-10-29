import React, { Component } from "react";
import StatsTable from "./StatsTable";

class Stats extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const user = this.props.user;
    const player = user.charAt(0).toUpperCase() + user.slice(1);
    return (
      <div>
        <div className="container auto-mx p-6">
          <h1 className="text-lg text-center">{player}'s Statistics:</h1>
          <StatsTable stats={this.props.stats}></StatsTable>
          <div className="pt-5 grid grid-cols-3">
            <div className="col-start-2 grid place-items-center">
              <button
                type="submit"
                className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-2 text-white font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                onClick={this.props.back}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stats;
