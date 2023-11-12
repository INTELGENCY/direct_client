import React from "react";
import "gantt-task-react/dist/index.css";
import React from "react";
import React from "react";

function ViewSwitcher({ onViewModeChange, onViewListChange, isChecked }) {
  return (
    <div className="ViewContainer">
      <button className="Button" onClick={() => onViewModeChange("QuarterDay")}>
        Quarter of Day
      </button>
      <button className="Button" onClick={() => onViewModeChange("HalfDay")}>
        Half of Day
      </button>
      <button className="Button" onClick={() => onViewModeChange("Day")}>
        Day
      </button>
      <button className="Button" onClick={() => onViewModeChange("Week")}>
        Week
      </button>
      <button className="Button" onClick={() => onViewModeChange("Month")}>
        Month
      </button>

      <div className="Switch">
        <label className="Switch_Toggle">
          <input
            type="checkbox"
            defaultChecked={isChecked}
            onClick={() => onViewListChange(!isChecked)}
          />
          <span className="Slider" />
        </label>
        Show Task List
      </div>
    </div>
  );
}

export default ViewSwitcher;
