import React, { Component } from "react";
import "./styles/EmptyResults.css";

class EmptyResults extends Component {
  render() {
    return (
      <h2 class="empty-results">
        There are no results for the filters selected.
        <br />
        <br />
        Please validate your selections and try again.
      </h2>
    );
  }
}

export default EmptyResults;
