import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import colors from './global/colors';

const { width, height } = Dimensions.get("window");

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={require("./Compontents/images/profile_image.jpg")}/>
        <Text style={styles.username}>Sam Jhon</Text>
        <View style={styles.profileCard}>
          <View style={styles.section}>
            <Text style={styles.sectionValue}>A+</Text>
            <Text style={styles.sectionName}>Blood Group</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionValue}>1238</Text>
            <Text style={styles.sectionName}>Points</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionValue}>8</Text>
            <Text style={styles.sectionName}>Donations</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  profileContainer: {
    backgroundColor: colors.depth3,
    padding: 20,
    justifyContent: 'center',
    alignItems: "center",
    height: height / 3.5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
  username: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 6,
  },
  profileCard: {
    flexDirection: "row",
    backgroundColor: colors.depth1,
    padding: 16,
    borderRadius: 8,
    width: width * 0.85,
    justifyContent: 'space-between',
    position: "absolute",
    bottom: -45,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionValue: {
    color: colors.depth3,
    fontSize: 22,
    fontWeight: "900"
  },
  sectionName: {
    color: "#444",
  }
})