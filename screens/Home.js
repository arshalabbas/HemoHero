import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";

import StatCard from "./Compontents/StatCard";
import RequestsCard from './Compontents/RequestsCard';
import Button from './Compontents/Button';

export default function Home() {
    const [count, setCount] = useState(30786);
    const [requests, setRequests] = useState([
        {
            name: "Arjun",
            bloodGroup: "B+",
            hospital: "WIMS Hospital",
            place: "Meppadi, Wayanad"
        },
        {
            name: "Shivan",
            bloodGroup: "A+",
            hospital: "WIMS Hospital",
            place: "Meppadi, Wayanad"
        },
        {
            name: "Hamsa",
            bloodGroup: "B-",
            hospital: "LEO Hospital",
            place: "Kalpetta, Wayanad"
        },
    ]);

    useEffect(() => {
        setInterval(()=> {
            setRequests(prev => setRequests([...prev, prev[Math.floor(Math.random() * prev.length)]]));
            setCount((prev) => setCount(prev + Math.floor(Math.random() * 30)));
        }, 8000);
    }, [])

    const navigate = useNavigation().navigate;

    return (
        <View style={styles.container}>
            <View style={styles.statusContainer}>
                <StatCard count={count} />
            </View>
            <View style={styles.requestsContainer}>
                <RequestsCard requests={requests} />
            </View>
            <View style={styles.buttonsContainer}>
                <Button title="Donate" onPress={() => navigate("donate")} />
                <Button title="Request" onPress={() => navigate("request")} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
    },
    statusContainer: {
        alignItems: "center",
        marginVertical: 8,
    },
    requestsContainer: {
        alignItems: "center",
        marginVertical: 22,
    },
    buttonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around"
    }
})