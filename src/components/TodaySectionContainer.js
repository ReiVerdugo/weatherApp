import React from 'react';
import { View } from 'react-native';

const TodaySectionContainer = (props) => {
  const { sectionStyle } = styles;
  return <View style={sectionStyle}>{props.children}</View>;
};


const styles = {
  sectionStyle: {
    borderTopWidth: 0,
    height: 250,
    backgroundColor: '#1CC1FD',
    marginTop: 2,
    elevation: 1
  }
}
export default TodaySectionContainer;
