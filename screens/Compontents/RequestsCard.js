import { StyleSheet, Text, View, ScrollView, Dimensions, } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("window");

export default function RequestsCard({ requests }) {
    const navigate = useNavigation().navigate;
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Emergency Requests</Text>
            <Text style={styles.description}>nearby location</Text>
            <ScrollView style={styles.scrollContainer}>
                {
                    requests.map((data, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.7} style={styles.cardContainer} onPress={()=> navigate("details", data)}>
                            <Text style={styles.bloodGroup}>{data.bloodGroup}</Text>
                            <View style={styles.requestSection}>
                                <View style={styles.section}>
                                    <Icon name="user" size={12} />
                                    <Text>{data.name}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Icon name="hospital" size={12} />
                                    <Text>{data.hospital}</Text>
                                </View>
                                <View style={styles.section}>
                                    <Icon name="location-arrow" size={12} />
                                    <Text>{data.place}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        width: width * 0.9,
    },
    heading: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 18,
    },
    cardContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 6,
    },
    requestSection: {
        flexDirection: "column",
        marginHorizontal: 12,
    },
    section: {
        flexDirection: "row",
        marginVertical: 1,
    },
    bloodGroup: {
        fontSize: 26,
    },
    scrollContainer: {
        marginVertical: 8,
        maxHeight: height / 2,
    },
    description: {
        textAlign: "center",
        color: "#333",
        fontSize: 12,
    }
})