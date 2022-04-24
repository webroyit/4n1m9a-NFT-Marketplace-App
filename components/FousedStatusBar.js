import { StatusBar } from 'react-native';
import { useIsFocused } from '@react-navigation/core';
import React from 'react';

const FousedStatusBar = (props) => {
  // This is a hook that gives us informatin on the status bar
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar animated={true} {...props} /> : null;
}

export default FousedStatusBar;