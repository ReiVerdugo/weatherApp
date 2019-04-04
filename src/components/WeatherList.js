import React, { Component } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import axios from 'axios';
import Row from './Row';

class WeatherList extends Component {
  state = { weathers: [], isLoading: true };

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5/forecast?q=London&cnt=10&APPID=4c1b641be580fd9771715065915442b2')
    .then(response => this.setState({ weathers: response.data.list, isLoading: false }));
  }

  renderWeathers() {
    if (this.state.isLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
    }
    return this.state.weathers.map(day => {
      if (day !== undefined) {
        return <Row key={day.dt} 
        max={day.main.temp_max} 
        min={day.main.temp_min} 
        main={day.weather[0].main} 
        image={day.weather[0].icon} />;
      }
    });
  }

  render() {
    return (
      <ScrollView>
        {this.renderWeathers()}
      </ScrollView>
    );
  }
}

export default WeatherList;
