import React, { useState, useRef } from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../../constants/colors";
import { NAVIGATION } from "../../constants/navigation";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import CustomInput from "../../components/custom-input/custom-input";
import CustomButton from "../../components/custom-button/custom-button";
import { commonStyles } from "../../styles/commonStyles";
import firebase, { firebaseConfig } from "../../firebase/firebase";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { initializeApp, getApp } from "firebase/app";
import { getAuth, PhoneAuthProvider } from "firebase/auth";

// Firebase references
const app = getApp();
const auth = getAuth();

const Auth = (props) => {
  const { navigation } = props;
  const [code, setCode] = useState("+91");
  const [number, setNumber] = useState("");
  const recaptchaVerifier = useRef(null);

  const redirectToOtp = (verificationId) => {
    navigation.navigate(NAVIGATION.OTP_SCREEN, {
      number: `${code}-${number}`,
      verificationId,
    });
  };

  const sendOtp = async () => {
    console.log(code + number);
    try {
      const phoneProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneProvider.verifyPhoneNumber(
        code + number,
        recaptchaVerifier.current
      );

      redirectToOtp(verificationId);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={app.options}
        attemptInvisibleVerification={false}
      />
      <View style={styles.upperView}>
        <View style={[commonStyles.margV10, commonStyles.paddV10]} />

        <View style={styles.middleView}>
          <Text style={styles.heading}>Login / Sign up</Text>

          <View style={styles.inputContainer}>
            <View style={styles.codeInputContainer}>
              <CustomInput
                placeholder="+91"
                inpValue={code}
                onChangeHandler={setCode}
                bgColor={COLORS.inputBg}
                textColor={COLORS.black}
              />
            </View>
            <View style={styles.numberInputContainer}>
              <CustomInput
                isNumber
                placeholder="Enter Your Phone Number"
                inpValue={number}
                onChangeHandler={setNumber}
                bgColor={COLORS.inputBg}
                textColor={COLORS.black}
              />
            </View>
          </View>
          <View style={{ marginVertical: dynamicSize(20) }}>
            <CustomButton
              title="Continue"
              bgColor={COLORS.gold}
              isBackground
              isRounded
              hPadding={20}
              isHorizontalPadding
              isVerticalPadding
              vPadding={12}
              textColor={COLORS.white}
              onPressHandler={sendOtp}
            />
          </View>
        </View>
      </View>

      <View style={styles.lowerView}>
        <CustomButton
          title="Skip for now"
          bgColor={COLORS.black}
          isBackground
          textColor={COLORS.gold}
          onPressHandler={() => navigation.navigate(NAVIGATION.ALL_PRODUCTS)}
        />
        <Text style={styles.termAndConditions}>
          By continuing, you agree to our
          <Text style={styles.link}> Terms of Service</Text> and
          <Text style={styles.link}> Privacy Policy</Text>.
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
    backgroundColor: COLORS.black,
  },
  img: {
    marginTop: dynamicSize(40),
    width: dynamicSize(108),
    height: dynamicSize(108),
  },
  middleView: {
    alignItems: "flex-start",
    width: "100%",
    paddingHorizontal: dynamicSize(20),
  },
  heading: {
    color: COLORS.textColor,
    fontSize: getFontSize(16),
    lineHeight: dynamicSize(24),
    fontWeight: "500",
    marginVertical: dynamicSize(15),
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  codeInputContainer: {
    color: COLORS.textColor,
    flex: 0.25,
  },
  numberInputContainer: {
    flex: 0.73,
  },
  lowerView: { height: dynamicSize(100), justifyContent: "space-around" },
  upperView: {
    alignItems: "center",
  },
  termAndConditions: {
    fontSize: getFontSize(10),
    lineHeight: dynamicSize(16),
    fontWeight: "400",
    color: COLORS.dullText,
    textAlign: "center",
  },
  link: {
    color: COLORS.linkText,
  },
});

export default Auth;
