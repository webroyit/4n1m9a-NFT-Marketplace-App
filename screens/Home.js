import { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { COLORS, NFTData } from '../constants';
import { HomeHeader, NFTCard, FousedStatusBar } from '../components';

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FousedStatusBar />
      <HomeHeader />
      <NFTCard />
    </SafeAreaView>
  )
}

export default Home;