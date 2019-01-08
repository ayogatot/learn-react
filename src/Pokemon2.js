import React, {Component} from "react";
import "./Pokemon2.css";

class Pokemon2 extends Component {
    render() {
        return <div className="card">
            <span className="card-item charizard" />
            <span className="card-item alakazam" />
            <span className="card-item gengar" />
            <span className="card-item pinsir" />
          </div>;
    }
}

export default Pokemon2;
