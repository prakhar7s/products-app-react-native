import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { IMAGES } from "../../constants/images";
import { COLORS } from "../../constants/colors";
import { NAVIGATION } from "../../constants/navigation";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import { TextInput } from "react-native-paper";
import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import OTPInputView from "@twotalltotems/react-native-otp-input";
import AppHeader from "../../components/app-header/app-header";
import { commonStyles } from "../../styles/commonStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

const OTPScreen = (props) => {
  const { navigation, route } = props;
  const [code, setCode] = useState("");

  return (
    <>
      <AppHeader title="One Time Password" />
      <View style={styles.container}>
        <Text style={[styles.text, commonStyles.margV10]}>Hi Prakhar,</Text>
        <View style={commonStyles.margV10} />
        <Text style={[styles.text]}>
          Hang on! We will automatically detect an sms sent to your phone number
        </Text>
        <Text style={[styles.text, styles.boldText]}>
          {/* {route?.params?.number} */}
        </Text>
        <Text style={[styles.text]}>Enter OTP Manually</Text>
        <View style={commonStyles.margV10} />
        <View style={commonStyles.margV5} />

        <OTPInputView
          pinCount={6}
          style={{ width: "100%", height: dynamicSize(60) }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            navigation.navigate(NAVIGATION.ALL_PRODUCTS);
          }}
        />

        <Text style={[styles.text, commonStyles.margV10]}>
          Didn’t receive the code?
        </Text>
        <View style={styles.lowerView}>
          <TouchableOpacity>
            <Text style={styles.resendOTP}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    paddingHorizontal: dynamicSize(16),
    backgroundColor: COLORS.black,
    paddingTop: dynamicSize(100),
  },
  img: {
    marginTop: dynamicSize(40),
    width: dynamicSize(108),
    height: dynamicSize(108),
  },
  text: {
    color: COLORS.textColor,
    fontSize: getFontSize(16),
    fontWeight: "400",
    lineHeight: dynamicSize(24),
  },
  mv10: {
    marginVertical: dynamicSize(10),
  },
  lightText: {
    color: COLORS.placeholderText,
  },
  boldText: {
    fontWeight: "700",
    color: COLORS.placeholderText,
  },
  underlineStyleBase: {
    color: COLORS.black,
    backgroundColor: COLORS.inputBg,
    borderRadius: dynamicSize(8),
    borderWidth: 2,
  },

  underlineStyleHighLighted: {
    borderColor: COLORS.gold,
  },
  resendOTP: {
    color: COLORS.gold,
    fontWeight: "600",
    fontSize: getFontSize(16),
    lineHeight: dynamicSize(24),
  },
});

export default OTPScreen;
