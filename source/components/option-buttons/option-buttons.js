import react from "react";
import { View, Text } from "react-native";
import { BUTTON_TYPES } from "../../constants/common";
import { commonStyles } from "../../styles/commonStyles";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
const OptionButton = (props) => {
  const {
    type,
    title,
    borderColor,
    color,
    isActive,
    size,
    fontSize,
    isDisable,
  } = props;

  const wrapperStyles = {
    borderColor,
    borderWidth: isActive ? 2 : 1,
    borderRadius: dynamicSize(type === BUTTON_TYPES.COLOR ? 99 : 10),
    width: dynamicSize(isActive ? size + 5 : size),
    height: dynamicSize(isActive ? size + 5 : size),
    opacity: isDisable ? 0.3 : 1,
  };

  const textStyles = {
    color,
    fontSize: getFontSize(isActive ? fontSize + 2 : fontSize),
    fontWeight: "500",
  };

  const innerViewStyles = {
    width: dynamicSize(isActive ? size - 12 : size - 14),
    height: dynamicSize(isActive ? size - 12 : size - 14),
    backgroundColor: color,
    borderRadius: 99,
  };
  return (
    <View>
      {type === BUTTON_TYPES.SIZE && (
        <View style={[commonStyles.flexCol, wrapperStyles]}>
          <Text style={textStyles}>{title}</Text>
        </View>
      )}

      {type === BUTTON_TYPES.COLOR && (
        <View style={[commonStyles.flexCol, wrapperStyles]}>
          <View style={innerViewStyles} />
        </View>
      )}
    </View>
  );
};

export { OptionButton };
