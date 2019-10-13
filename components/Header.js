import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const getResultColor = () => {
    if ( props.result === 'Victory!') return 'green';
    if ( props.result === 'Defeat!') return 'red';
    return null;
  };

  return (
    <View>
      <Text style={{color: getResultColor()}}>{props.result}</Text>
    </View>
  );
}

export default Header;
