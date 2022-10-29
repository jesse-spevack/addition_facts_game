import React, { Component } from "react";

class XpBar extends Component {
  constructor(props) {
    super(props);
  }

  getWidths(props) {
    const xp = parseInt(props.xp);
    const nextLevelXp = parseInt(props.nextLevelXp);
    const progress = (xp * 1.0) / nextLevelXp;
    let xpBarWidth, remainingBarWidth;

    if (progress == 0) {
      xpBarWidth = "";
      remainingBarWidth = "w-full";
    } else if (progress < 1 / 5) {
      xpBarWidth = "w-1/6";
      remainingBarWidth = "w-5/6";
    } else if (progress < 1 / 4) {
      xpBarWidth = "w-1/5";
      remainingBarWidth = "w-4/5";
    } else if (progress < 1 / 3) {
      xpBarWidth = "w-1/4";
      remainingBarWidth = "w-3/4";
    } else if (progress < 2 / 5) {
      xpBarWidth = "w-1/3";
      remainingBarWidth = "w-2/3";
    } else if (progress < 1 / 2) {
      xpBarWidth = "w-2/5";
      remainingBarWidth = "w-3/5";
    } else if (progress < 3 / 5) {
      xpBarWidth = "w-1/2";
      remainingBarWidth = "w-1/2";
    } else if (progress < 2 / 3) {
      xpBarWidth = "w-3/5";
      remainingBarWidth = "w-2/5";
    } else if (progress < 3 / 4) {
      xpBarWidth = "w-2/3";
      remainingBarWidth = "w-1/3";
    } else if (progress < 4 / 5) {
      xpBarWidth = "w-3/4";
      remainingBarWidth = "w-1/4";
    } else if (progress < 5 / 6) {
      xpBarWidth = "w-4/5";
      remainingBarWidth = "w-1/5";
    } else if (progress < 1) {
      xpBarWidth = "w-5/6";
      remainingBarWidth = "w-1/6";
    } else {
      xpBarWidth = "w-full";
      remainingBarWidth = "";
    }

    return {
      xpBarWidth: xpBarWidth,
      remainingBarWidth: remainingBarWidth,
    };
  }

  render() {
    const widths = this.getWidths(this.props);
    const xpBarWidth = widths.xpBarWidth;
    const remainingBarWidth = widths.remainingBarWidth;

    return (
      <div>
        <div className="h-4 sm:pt-1 flex">
          <div
            className={xpBarWidth + " bg-indigo-600 transition-all ease-in-out"}
          />
          <div
            className={
              remainingBarWidth + " bg-white transition-all ease-in-out"
            }
          />
        </div>
      </div>
    );
  }
}

export default XpBar;
