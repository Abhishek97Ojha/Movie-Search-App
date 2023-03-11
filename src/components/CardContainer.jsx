import React, { useContext } from "react";
import "./CardContainer.css";
import { MyContext } from "../App";
const CardContainer = () => {
  const context = useContext(MyContext);
  if (!context) {
    return (
      <div>
        {" "}
        <h2>Please Enter Valid Movie Name</h2>
      </div>
    );
  }
  return (
    <div className="container">
      {context.data.map((ele) => {
        return (
          <div className="card">
            <div className="image">
              <img src={ele.Poster} alt="" />
            </div>
            <div className="details">
              <p className="name">{ele.Title}</p>
              <p className="type">{ele.Type.toUpperCase()}</p>
              <p className="year">{ele.Year}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardContainer;
