import React from 'react';
import { View, Text, Image } from 'react-native';
import TodaySectionContainer from './TodaySectionContainer';

const TodaySection = (props) => {
  const { 
    infoViewStyle,
    dayTextStyle,
    maxTextStyle,
    minTextStyle,
    horizontalViewStyle,
    imageStyle
   } = styles;
  const { weather } = props;
  const { main, icon } = weather.weather[0];
  const { temp_max, temp_min } = weather.main;
  return (
    <TodaySectionContainer>
      <View style={infoViewStyle}>
        <Text style={dayTextStyle}>
          Today, April 11 
        </Text>
        <View style={horizontalViewStyle}>
          <Text style={maxTextStyle}>
            {temp_max}°
          </Text>
          <Image style={imageStyle} source={{ uri: `https://openweathermap.org/img/w/${icon}.png` }} />
        </View>
        
        <View style={horizontalViewStyle}>
          <Text style={minTextStyle}>
            {temp_min}°
          </Text>
          <Text style={minTextStyle}>
            {main}
          </Text>
        </View>
      </View>
    </TodaySectionContainer>
  );
};

const styles = {
  infoViewStyle: {
    marginLeft: 40,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flex: 1
  },
  dayTextStyle: {
    color: 'white',
    fontSize: 22
  },
  maxTextStyle: {
    color: 'white',
    fontSize: 50
  },
  minTextStyle: {
    color: 'white',
    fontSize: 30
  },
  horizontalViewStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginRight: 40
  },
  imageStyle: {
    flex: 1,
    width: 50
  }
};

export default TodaySection;
