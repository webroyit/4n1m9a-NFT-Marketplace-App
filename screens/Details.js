import { View, Text, SafeAreaView, Image, StatusBar, FlatList } from 'react-native';

import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, SubInfo, FousedStatusBar, DetailsDesc, DetailsBid } from '../components';

//  route, navigation come from Home.js Details
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  console.log(data)

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FousedStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true} />
    </SafeAreaView>
  )
}

export default Details;