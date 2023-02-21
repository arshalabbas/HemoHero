import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from "./Compontents/Card";

export default function Details({ route }) {
  const data = route.params;
  return (
    <View style={styles.container}>
      <Card data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
})