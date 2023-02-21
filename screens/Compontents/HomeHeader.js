import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Constants from "expo-constants";
import React from 'react';
import Icon from "@expo/vector-icons/FontAwesome5";

const { width } = Dimensions.get("window");

export default function HomeHeader({ username, points }) {

    const navigation = useNavigation();

    return (
        <View style={styles.headerContainer}>
            <View style={styles.detailsContainer}>
                <Text style={styles.username}>Hi {username}!</Text>
                <TouchableOpacity style={styles.pointsContainer} activeOpacity={0.7} onPress={() => navigation.navigate("rewards")}>
                    <Icon name="coins" size={16} color="gold" />
                    <Text style={styles.pointsText}>{points}</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity activeOpacity={0.7} style={styles.imageContainer} onPress={() => navigation.navigate("profile")}>
                <Image style={styles.profileImage} source={require("./images/profile_image.jpg")} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        width: width,
        paddingTop: Constants.statusBarHeight,
        paddingHorizontal: 16,
        paddingBottom: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // backgroundColor: "#666",
    },
    detailsContainer: {
        marginVertical: 8,
    },
    username: {
        fontSize: 22,
        fontWeight: "700",
    },
    pointsContainer: {
        flexDirection: "row",
    },
    pointsText: {
        marginHorizontal: 8,
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
    }
})