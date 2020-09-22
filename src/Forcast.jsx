import React, { Component } from "react";
import { tempretureInDegreeCelcius } from "./functions";

export class Forcast extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      temp: 0,
    };
  }

  componentDidMount() {
    // weather data fetch function will go here
    fetch(
      "https://community-open-weather-map.p.rapidapi.com/weather?callback=test&id=2172797&units=%2522metric%2522%20or%20%2522imperial%2522&mode=xml%252C%20html&q=London%252Cuk",
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "ecd15ae67dmsh38bc07ee21b2a33p1fcc6cjsn9151b583afd6",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        this.setState({ data: response.test });

        // console.log(this.state.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }


  getTemp = () => {
    const newTemp = tempretureInDegreeCelcius(this.data.temp);
    this.setState({ temp: newTemp });
  };
  
  

  render() {
    return (
      <div>
        <h2>Find Current Weather Conditions</h2>
      </div>
    );
  }
}

export default Forcast;
