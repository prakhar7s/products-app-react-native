import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { COLORS } from "../../constants/colors";
import { NAVIGATION } from "../../constants/navigation";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import StatusBar from "./../../utils/StatusBar";

const SplashScreen = (props) => {
  const { navigation } = props;

  const redirect = () => {
    props.navigation.reset({
      index: 0,
      routes: [{ name: NAVIGATION.AUTH_SCREEN }],
    });
  };

  useEffect(() => {
    setTimeout(() => {
      redirect();
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar backgroundColor={COLORS.gold} barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.title}>Dapper</Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    backgroundColor: COLORS.gold,
  },
  title: {
    fontFamily: "POPPINS_400",
    fontSize: 35,
    marginTop: 200,
    marginBottom: 5,
    color: COLORS.white,
  },
});

export default SplashScreen;
