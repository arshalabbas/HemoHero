import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from './global/colors'

const { height } = Dimensions.get("window");

export default function Loading() {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center', height}}>
      <Text style={{ color: colors.depth3, fontSize: 45, fontWeight: "900" }}>Loading...</Text>
    </View>
  )
}

const styles = StyleSheet.create({})