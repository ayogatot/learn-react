import React, { Component } from "react";
import "./Pokemon.css";

const topCollection = [1, 2, 3, 4, 5, 6 , 7 , 8];

class Pokemon extends Component {
  render() {
    return (
      <div className="card">
        {topCollection.map((item, index) => {
          return (
            <span className="card-item">
              <img key={index} src={`assets/${index + 1}.png`} alt="Media" />
              <div className="">

              </div>
            </span>
          );
        })}
      </div>
    );
  }
}

export default Pokemon;
