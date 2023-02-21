import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const { width } = Dimensions.get("window");

export default function Card({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Recipient Details</Text>
      <ScrollView>
        <Text>Name: {data.name}</Text>
        <Text>Blood Group: {data.bloodGroup}</Text>
        <Text>Hospital: {data.hospital}</Text>
        <Text>Address: {data.place}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width * 0.9,
        backgroundColor: "#fff",
        marginVertical: 12,
        padding: 16,
        borderRadius: 8,
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        elevation: 5,
    },
    heading: {
        fontWeight: "700",
        fontSize: 16,
        textAlign: 'center',
    }
})