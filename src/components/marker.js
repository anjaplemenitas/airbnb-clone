import React from "react";
import "./marker.css";

class Marker extends React.Component {
  render () {

    return (
      <div className="marker">
        {this.props.text}€
      </div>
    );
  }
}

export default Marker;
