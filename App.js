import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./src/screens/home";
import { Day1 } from "./src/screens/day1";
import { Day2 } from "./src/screens/day2";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Day1" component={Day1} />
        <Stack.Screen name="Day2" component={Day2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
