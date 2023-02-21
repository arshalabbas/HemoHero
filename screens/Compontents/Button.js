import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../global/colors'

export default function Button({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.buttonTitle}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: colors.depth3,
        paddingHorizontal: 10,
        paddingVertical: 16,
        width: 130,
        borderRadius: 8,
    },
    buttonTitle: {
        textAlign: 'center',
        color: colors.depth0,
        fontWeight: "800",
        fontSize: 16,
    }
})