import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NAVIGATION } from "../constants/navigation";
import Home from "../screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import { ProductDetails } from "../screens/product-details/product-details";

const Stack = createStackNavigator();

class AppStack extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={NAVIGATION.HOME_SCREEN}
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
            cardStyle: {
              backgroundColor: "#fff",
            },
            animationEnabled: true,
          }}
        >
          <Stack.Screen name={NAVIGATION.HOME_SCREEN} component={Home} />
          <Stack.Screen
            name={NAVIGATION.PRODUCT_DETAILS}
            component={ProductDetails}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppStack;
