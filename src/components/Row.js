import React from 'react';
import { Text, View, Image } from 'react-native';

const Row = (props) => {
  const { main, max, min, image } = props;
  const { 
    temperaturesContainerStyle, 
    imageStyle, 
    imageContainerStyle,
    container,
    weatherStyle,
    biggerFontStyle
   } = styles;
  return (
    <View style={container}>
      <View style={imageContainerStyle}>
        <Image style={imageStyle} source={{ uri: `https://openweathermap.org/img/w/${image}.png` }} />
      </View>

      <View style={weatherStyle}>
        <Text style={biggerFontStyle}>
          {main}
        </Text>
        <Text>
          {main}
        </Text>
      </View>

      <View style={temperaturesContainerStyle}>
        <Text style={biggerFontStyle}>
          {max}
        </Text>
        <Text>
          {min}
        </Text>
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  temperaturesContainerStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageContainerStyle: {
    flex: 1,
    height: 50,
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    flex: 1,
    height: 50
  },
  weatherStyle: {
    flex: 2,
    flexDirection: 'column'
  },
  biggerFontStyle: {
    fontSize: 16,
    fontWeight: '600'
  }
};

export default Row;
