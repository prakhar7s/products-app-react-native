import React, { useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { COLORS } from "../../constants/colors";
import { dynamicSize } from "../../utils/dynamicSize";

const CustomInput = (props) => {
  const [isValidInp, setValidInp] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const {
    isNumber,
    placeholder,
    onChangeHandler,
    inpValue,
    validateInput,
    bgColor,
    align,
    borderRadius,
    placeholderTextColor,
    height,
    borderColor,
    paddH,
    multiline,
    numberOfLines,
    textColor,
  } = props;

  // !isValidInp && !props.checkValidity
  //   ? {borderWidth: 1, borderColor: '#FF6565'}
  //   : {},
  // {
  //   marginTop: 20,
  // },
  return (
    <View>
      <TextInput
        maxLength={isNumber ? 10 : 9999}
        keyboardType={isNumber ? "number-pad" : "default"}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : COLORS.placeholderText
        }
        multiline={multiline}
        numberOfLines={numberOfLines}
        autoCapitalize={props.upperCase ? "characters" : "none"}
        style={[
          styles.input,
          {
            borderRadius: borderRadius ? borderRadius : dynamicSize(6),
            height: height ? dynamicSize(height) : dynamicSize(54),
            backgroundColor: bgColor ? bgColor : "transparent",
            borderColor: borderColor ? borderColor : "transparent",
            paddingHorizontal: paddH ? paddH : 20,
            textAlignVertical: multiline ? "top" : "center",
            color: textColor ? textColor : COLORS.textColor,
          },
        ]}
        placeholder={placeholder}
        onChangeText={(val) => {
          if (props.externalValidation) {
            const res = validateInput(val);
            setValidInp(res[0]);
            setErrorMsg(res[1]);
          }
          onChangeHandler(val);
        }}
        value={inpValue}
        onBlur={() => {
          // const res = validateInput(inpValue);
          // setValidInp(res[0]);
          // setErrorMsg(res[1]);
        }}
      />
      {!props.checkValidity && !isValidInp && (
        <Text
          style={{
            color: "#FF6565",
          }}
        >
          {errorMsg}
        </Text>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
});
