import { Dimensions, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from './Compontents/Button';

const { width } = Dimensions.get("window")

export default function Donate() {
  const hospitals = [
    {
      name: "WIMS Hospital",
      city: "Meppadi"
    },
    {
      name: "BMH",
      city: "Kozhikode"
    },
    {
      name: "LEO Hospital",
      city: "Kalpetta"
    }
  ]
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState(hospitals);

  const changeTextHandler = (text) => {
    setCity(text);
    if (text === "") setHospital(hospitals);
    else {
      const newDatas = hospitals.filter(data => data.city.toLowerCase().startsWith(text.toLowerCase()));
      setHospital(newDatas);
    }

  }

  const pressHandler = () => {
    setCity("Kozhikode");
    changeTextHandler("Kozhikode");
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.selectionContainer} activeOpacity={0.7} onPress={pressHandler}>
        <View style={styles.locationButton}>
          <Icon style={styles.icon} name="location-arrow" size={20} />
          <Text>Use your current location</Text>
        </View>
      </TouchableOpacity>
      <Text>Or</Text>
      <TextInput style={styles.textInput} value={city} onChangeText={(text) => changeTextHandler(text)} placeholder="Enter the Cty" />

      <View style={styles.listContainer}>
        <Text style={styles.heading}>Hospitals {city !== "" ? ` : ${city}` : ""}</Text>
        <ScrollView>
          {
            hospital.map((data, index) => (
              <TouchableOpacity key={index} style={styles.data}>
                <Text key={index}>{data.name}</Text>
              </TouchableOpacity>

            ))
          }
        </ScrollView>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Confirm" onPress={() => alert("The request has been sent!")} />
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  locationButton: {
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  selectionContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  icon: {
    marginHorizontal: 12,
  },
  textInput: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    width: width * 0.8,
    marginVertical: 16,
  },
  listContainer: {
    backgroundColor: "#fff",
    width: width * 0.9,
    padding: 16,
  },
  heading: {
    fontSize: 18,
    fontWeight: "700",
  },
  data: {
    marginVertical: 8,
  },
  buttonContainer: {
    marginVertical: 16,
  }
})