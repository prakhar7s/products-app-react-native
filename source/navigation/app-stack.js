import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { NAVIGATION } from "../constants/navigation";
import Home from "../screens/home/home";
import { NavigationContainer } from "@react-navigation/native";
import { ProductDetails } from "../screens/product-details/product-details";
import { AllProducts } from "../screens/all-products/all-products";
import { CustomizationScreen } from "../screens/customization-screen/customization-screen";
import SplashScreen from "../screens/splash-screen/splash-screen";
import Auth from "../screens/auth-screen/auth-screen";
import OTPScreen from "../screens/otp-screen/otp-screen";

const Stack = createStackNavigator();

class AppStack extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={NAVIGATION.SPLASH_SCREEN}
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
          <Stack.Screen name={NAVIGATION.AUTH_SCREEN} component={Auth} />
          <Stack.Screen name={NAVIGATION.OTP_SCREEN} component={OTPScreen} />

          <Stack.Screen
            name={NAVIGATION.SPLASH_SCREEN}
            component={SplashScreen}
          />

          <Stack.Screen
            name={NAVIGATION.PRODUCT_DETAILS}
            component={ProductDetails}
          />

          <Stack.Screen
            name={NAVIGATION.ALL_PRODUCTS}
            component={AllProducts}
          />
          <Stack.Screen
            name={NAVIGATION.CUSTOMIZATION_SCREEN}
            component={CustomizationScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default AppStack;
