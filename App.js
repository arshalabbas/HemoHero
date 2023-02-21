
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font"

const Stack = createStackNavigator();

//Screens
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Rewards from "./screens/Rewards";
import Donate from "./screens/Donate";
import Request from "./screens/Request";
import Details from "./screens/Details";
//Components
import Loading from "./screens/Loading";
import HomeHeader from './screens/Compontents/HomeHeader';

export default function App() {
  const [fontLoaded] = useFonts({
    "BebasNeue-Regular": require("./fonts/BebasNeue-Regular.ttf"),
  });
  const [userData, setUserData] = useState({
    name: "Sam",
    points: 1238,
  });
  return (
    fontLoaded ? (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="home" component={Home} options={{
            header: () => <HomeHeader username={userData.name} points={userData.points} />
          }} />
          <Stack.Screen name="profile" component={Profile} options={{
            title: "Profile"
          }} />
          <Stack.Screen name='rewards' component={Rewards} options={{
            title: "Rewards"
          }} />
          <Stack.Screen name='donate' component={Donate} options={{
            title: "Donate"
          }} />
          <Stack.Screen name='request' component={Request} options={{
            title: "Request"
          }} />
          <Stack.Screen name='details' component={Details} options={{
            title: "Details"
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    ) : <Loading />
  )
}
