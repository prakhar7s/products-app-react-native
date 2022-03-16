import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AppHeader from "../../components/app-header/app-header";
import CustomButton from "../../components/custom-button/custom-button";
import SVGICon from "../../components/svg-icon/svg-icon";
import { COLORS } from "../../constants/colors";
import { IMAGES } from "../../constants/images";
import { commonStyles } from "../../styles/commonStyles";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import { getSizes } from "../../utils/getSizes";
const ProductDetails = () => {
  const { height, width } = getSizes();
  return (
    <View style={styles.productDetails}>
      <AppHeader isHomeHeader title="BRAND NAME" isSearch isShop isBlack />

      <View style={[commonStyles.flexCol, { height: height * 0.7 }]}>
        <Image
          source={IMAGES.WHITE_TSHIRT}
          style={{
            width,
            height: "80%",
          }}
          resizeMethod="auto"
          resizeMode="contain"
        />
      </View>
      <View
        style={[
          commonStyles.flexCol,
          {
            height: height * 0.2,
          },
        ]}
      >
        <View
          style={[
            commonStyles.padd10,
            commonStyles.flexRow,
            commonStyles.justifyAround,
            styles.productDetailView,
          ]}
        >
          <View style={[styles.leftSide, commonStyles.justifyAround]}>
            <Text style={styles.prodNameLight}>
              BLACK <Text style={styles.prodNameBold}>TWO-PIECE</Text>
            </Text>
            <Text style={styles.prodPrice}>INR 30,000</Text>
          </View>
          <View style={[commonStyles.flexRow, styles.rightSide]}>
            <SVGICon name="SHOP" width={22} height={22} fill={COLORS.white} />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productDetails: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  productDetailView: {
    backgroundColor: COLORS.gray,
    borderRadius: dynamicSize(4),
    width: "80%",
    height: dynamicSize(85),
  },
  leftSide: {
    flex: 0.7,
    height: "80%",
    alignItems: "flex-start",
  },
  rightSide: {
    flex: 0.18,
    height: "80%",
    backgroundColor: COLORS.gold,
    borderRadius: dynamicSize(6),
  },
  prodNameLight: {
    fontSize: getFontSize(18),
    color: COLORS.textColor,
    fontWeight: "200",
  },
  prodNameBold: {
    fontSize: getFontSize(18),
    color: COLORS.textColor,
    fontWeight: "400",
  },
  prodPrice: {
    fontSize: getFontSize(14),
    color: COLORS.textColor,
    fontWeight: "400",
  },
});
export { ProductDetails };
