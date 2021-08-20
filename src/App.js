import React, { Component } from "react";
import EditableSection from "./EditableSection";
import WeatherCard from "./WeatherCard";
import EmptyResults from "./EmptyResults"
import "./styles/App.css";

class App extends Component {
  constructor() {
    super()
    
    //Go grab the data from test-data.json
    fetch("/test-data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }).then(response => {
      return response.json();
    }).then(json => {
      this.setState({jsonData: json})
    })

    //tiny app, so god-state is probably fine 
    this.state = {
      startDateFilter: new Date("01/01/2020"),
      endDateFilter: new Date("01/02/2020"),
    }

  }
  render() {
    let filteredWeatherCards = this.state.jsonData && 
                                  this.state.jsonData
                                    .filter(weatherEntry => !this.state.startDateFilter || new Date(weatherEntry.date) >= this.state.startDateFilter)
                                    .filter(weatherEntry => !this.state.endDateFilter   || new Date(weatherEntry.date) <= this.state.endDateFilter)
                                    .filter(weatherEntry => !this.state.locationFilter  || weatherEntry.town.toLowerCase().startsWith(this.state.locationFilter))
                                    .map((item) => (
                                      <WeatherCard
                                        date={item.date}
                                        weather={item.weather}
                                        location={item.town}
                                      />
                                  ))

    return (
      <div className="App">
        <EditableSection
          startDate={this.state.startDateFilter}
          endDate={this.state.endDateFilter}
          location={this.state.locationFilter} // ?
          onStartDateChange={changedDate => this.setState({startDateFilter: changedDate})}
          onEndDateChange={changedDate => this.setState({endDateFilter: changedDate})}
          onLocationChange={location => this.setState({locationFilter: location})}
        />
        <div className="results-section">
          { filteredWeatherCards && filteredWeatherCards.length ? filteredWeatherCards : <EmptyResults />}
        </div>
      </div>
    );
  }
}

export default App;
