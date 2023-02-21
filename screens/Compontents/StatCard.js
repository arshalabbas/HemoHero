import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import colors from "../global/colors";
import fonts from "../global/fonts";

const { width } = Dimensions.get("window");

export default function StatCard({ count }) {
  return (
    <View style={styles.statusContainer}>
      <Text style={styles.count}>{count}</Text>
      <Text>users donated today</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  statusContainer: {
    backgroundColor: colors.depth1,
    padding: 16,
    width: width * 0.9,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
  count: {
    fontSize: 46,
    fontFamily: fonts['BebasNeue-Regular'],
    letterSpacing: 3,
    color: "#000",
  }
})