import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
// import commonStyle from '../common-styles';

const CustomButton = (props) => {
  const {
    title,
    bgColor,
    isBackground,
    icon,
    isIcon,
    isBorder,
    onPressHandler,
    borderColor,
    textColor,
    isRounded,
    align,
    isHorizontalPadding,
    hPadding,
    isVerticalPadding,
    vPadding,
    iconPlace,
    fontSize,
  } = props;

  const conditionalStyles = {
    button: {
      backgroundColor: isBackground ? bgColor : "#FFFFFF",
      borderWidth: isBorder ? 1 : 0,
      borderColor: borderColor ? borderColor : "#8D8D8D",
      paddingHorizontal: isHorizontalPadding ? hPadding : dynamicSize(20),
      paddingVertical: isVerticalPadding ? vPadding : 4,
    },
    text: {
      color: textColor ? textColor : "#8D8D8D",
      textAlign: align ? align : "center",
      fontSize: fontSize ? getFontSize(fontSize) : getFontSize(16),
    },
  };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={[
        // commonStyle.flexBox,
        conditionalStyles.button,
        styles.customButton,
        {
          borderRadius: isRounded ? 999 : 5,
        },
      ]}
    >
      {isIcon && iconPlace === "LEFT" && (
        <View
          style={{
            height: 20,
            width: 20,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {icon}
        </View>
      )}
      <Text
        style={[
          styles.text,

          conditionalStyles.text,
          {
            flex: 1,
          },
        ]}
      >
        {" "}
        {title}{" "}
      </Text>
      {isIcon && iconPlace === "RIGHT" && (
        <View
          style={{
            height: 20,
            width: 20,
            justifyContent: "center",
          }}
        >
          {icon}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  customButton: {
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  text: {
    marginVertical: 5,
    flex: 1,
  },
});
