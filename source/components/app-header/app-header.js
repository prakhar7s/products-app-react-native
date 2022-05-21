import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../constants/colors";
import { commonStyles } from "../../styles/commonStyles";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import CustomButton from "../custom-button/custom-button";
import SVGICon from "../svg-icon/svg-icon";
import { app } from "../../firebase/firebase";

import { getAuth } from "firebase/auth";
import { NAVIGATION } from "../../constants/navigation";

// Firebase references
const auth = getAuth();
const AppHeader = (props) => {
  const { title, isHomeHeader, isMore, isSearch, isShop, shopHandler } = props;
  const navigation = useNavigation();

  const goBack = () => navigation.goBack();
  return (
    <View
      style={[
        commonStyles.flexRow,
        commonStyles.justifyBetween,
        commonStyles.paddH10,
        styles.appHeaderView,
      ]}
    >
      <View style={[commonStyles.flexRow, commonStyles.padd10]}>
        {isHomeHeader ? (
          <TouchableOpacity>
            <SVGICon
              name="MENU"
              strokeWidth={1}
              width={24}
              height={24}
              fill={COLORS.white}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={goBack}>
            <SVGICon
              name="BACK"
              strokeWidth={1}
              width={12}
              height={20}
              fill={COLORS.textColor}
            />
          </TouchableOpacity>
        )}

        <Text style={[commonStyles.margH10, commonStyles.paddH5, styles.title]}>
          {title}
        </Text>
      </View>

      <View style={[commonStyles.flexRow, commonStyles.paddH10]}>
        {isSearch && (
          <TouchableOpacity
            style={[
              commonStyles.margH5,
              commonStyles.flexCol,
              { width: dynamicSize(35) },
            ]}
          >
            <SVGICon name="SEARCH" width={20} height={20} fill={COLORS.white} />
          </TouchableOpacity>
        )}

        {isShop && (
          <TouchableOpacity
            style={[
              commonStyles.margH5,
              commonStyles.flexCol,
              { width: dynamicSize(45) },
            ]}
            onPress={shopHandler}
          >
            <SVGICon
              name="MEASUREMENTS"
              width={20}
              height={20}
              fill={COLORS.white}
            />
          </TouchableOpacity>
        )}

        {isHomeHeader && auth.currentUser && (
          <TouchableOpacity
            onPress={() => {
              auth.signOut();
              navigation.navigate(NAVIGATION.AUTH_SCREEN);
            }}
            style={commonStyles.margH5}
          >
            <SVGICon
              name="LOGOUT"
              strokeWidth={1}
              width={20}
              height={20}
              fill={COLORS.white}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appHeaderView: {
    height: dynamicSize(52),
    backgroundColor: COLORS.black,
    borderBottomColor: "#00000010",
    borderBottomWidth: 1,
  },
  title: {
    color: COLORS.white,
    fontSize: getFontSize(22),
    fontWeight: "600",
    lineHeight: dynamicSize(32),
  },
});

export default AppHeader;
