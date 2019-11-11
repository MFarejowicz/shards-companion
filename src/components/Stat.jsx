import React from "react";
import "../App.css";

const Stat = (props) => {
  const increaseValue = () => {
    props.setValue(props.value + 1);
  };

  const decreaseValue = () => {
    if (props.value > 0) {
      props.setValue(props.value - 1);
    }
  };

  return (
    <div className="center-column vertical-space">
      <h3>{props.name}</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={props.imgURL}
          alt={props.name}
          style={{ width: "100px", height: "100px" }}
        ></img>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            style={{ width: "40px", height: "40px" }}
            onClick={increaseValue}
          >
            +
          </button>
          <span style={{ margin: "10px 0" }}>{props.value}</span>
          <button
            style={{ width: "40px", height: "40px" }}
            onClick={decreaseValue}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Stat;
