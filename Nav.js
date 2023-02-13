import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

import Home from "./screens/Home";
import Room from "./screens/Room";
import SignIn from "./screens/SignIn";
import Header from "./components/Header";
const Stack = createNativeStackNavigator();

export default function Nav() {
  const [userToken, setUserToken] = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitle: (props) => <Header {...props} /> }}
      >
        {userToken === null ? (
          <Stack.Screen name="SignIn" component={SignIn} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Room" component={Room} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
