import React, { useState } from "react";
import "../components/Clicker.css";

const Clicker = () => {
  const [count, setCount] = useState(0);

  //   if (count <= 0) {
  //     decrementCount = () => setCount(0);
  //   }

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }

  return (
    <React.Fragment className="container clicker-top">
      <div className="clicker border border-secondary rounded">
        <div className="clicker-display d-flex align-items-center bg-light text-secondary">
          <div className="mx-auto display-1">{count}</div>
        </div>
        <div className="clicker-button-panel d-flex flex-grow">
          <button className="btn btn-success w-100" onClick={incrementCount}>
            <i className="fa fa-plus fa-2x"></i>
          </button>

          <button className="btn btn-warning w-100" onClick={resetCount}>
            <i className="fa fa-refresh fa-2x"></i>
          </button>

          <button className="btn btn-danger w-100" onClick={decrementCount}>
            <i className="fa fa-minus fa-2x"></i>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Clicker;
