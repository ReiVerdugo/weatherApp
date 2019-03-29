import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import axios from 'axios';

class WeatherList extends Component {
  state = { weathers: [] };

  componentWillMount() {
    axios.get('https://samples.openweathermap.org/data/2.5/forecast/daily?lat=35&lon=139&cnt=10&appid=4c1b641be580fd9771715065915442b2')
    .then(response => this.setState({ weathers: response.data.list }))
  }

  renderWeathers() {
    return this.state.weathers.map(day => 
      <Text key={day.dt}>{day.weather[0].main}</Text>
    );
  }

  render() {
    console.log(this.state.weathers);
    return (
      <View>
        {this.renderWeathers()}
      </View>
    );
  }
}

export default WeatherList;
