import React from 'react';
import { View, Image } from 'react-native';

const Header = () => {
  const { headerViewStyle, sunImageStyle, headerImageStyle } = styles;
  const sunImage = require('../../assets/drawable-xhdpi/ic_clear.png');

  const sunshineTextImage = require('../../assets/drawable-xhdpi/ic_logo.png');
  
  return (
    <View style={headerViewStyle}>
      <Image style={sunImageStyle} source={sunImage} />
      <Image style={headerImageStyle} source={sunshineTextImage} />
    </View>
  );
};

const styles = {
  headerViewStyle: {
    backgroundColor: '#1CC1FD',
    height: 90,
    borderColor: 'black',
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    shadowOffset: { width: 0, height: 3},
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowColor: 'black',
    elevation: 4
  },
  sunImageStyle: {
    width: 50,
    height: 50,
    marginLeft: 15,
    marginRight: 15
  },
  headerImageStyle: {
    height: 50
  }
};

export default Header;

