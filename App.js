import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { CartProvider } from "./source/shop/CartProvider";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import AppLoading from "expo-app-loading";
import AppStack from "./source/navigation/app-stack";
import "react-native-gesture-handler";
import { COLORS } from "./source/constants/colors";

export default function App() {
  let [fontsLoaded] = useFonts({
    POPPINS_400: Poppins_400Regular,
    POPPINS_500: Poppins_500Medium,
    POPPINS_600: Poppins_600SemiBold,
    POPPINS_700: Poppins_700Bold,
    POPPINS_800: Poppins_800ExtraBold,
    POPPINS_900: Poppins_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <CartProvider>
      <AppStack />
    </CartProvider>
  );
}
