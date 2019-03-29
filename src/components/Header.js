import React from 'react';
import { View, Image } from 'react-native';

const Header = () => {
  const { headerViewStyle, sunImageStyle, headerImageStyle} = styles;

  return (
    <View style={headerViewStyle}>
      <Image style={sunImageStyle} source={require('../../assets/drawable-xhdpi/ic_clear.png')} />
      <Image style={headerImageStyle} source={require('../../assets/drawable-xhdpi/ic_logo.png')} />
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
    shadowOpacity: 0.3,
    shadowColor: 'black'
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
}

export default Header;

