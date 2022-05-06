import { View, Text } from 'react-native';
import React, { useState } from 'react';

import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsDesc = ({ data }) => {
  return (
    <View>
      <View style={{
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font} />

        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary
        }}>
          Description
        </Text>

        <View style={{ marginTop: SIZES.base}}>
          <Text style={{
            fontSize: SIZES.small,
            fontFamily: FONTS.regular,
            color: COLORS.secondary,
            lineHeight: SIZES.large
          }}>
            {data.description}
          </Text>
        </View>
      </View>
    </View>
  )
}

export default DetailsDesc;