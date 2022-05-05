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

      <View style={{
        width: '100%',
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        zIndex: 1
      }}>
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
    </SafeAreaView>
  )
}

export default Details;