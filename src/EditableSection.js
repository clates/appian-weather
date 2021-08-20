import React, { Component } from "react";
import "./styles/EditableSection.css";
import DatePicker from "./DatePicker.js";
import TextField from "./TextField.js";

class EditableSection extends Component {
  render() {
    return (
      <div className="editable-section">
        <DatePicker
          title="Start Date"
          onChange={date => this.props.onStartDateChange(date)}
          value={this.props.startDate}
        />
        <DatePicker
          title="End Date"
          onChange={date => this.props.onEndDateChange(date)}
          value={this.props.endDate}
        />
        <TextField
          title="Location"
          onChange={e => this.props.onLocationChange(e.target.value)}
          value={this.props.location}
        />
      </div>
    );
  }
}

export default EditableSection;
