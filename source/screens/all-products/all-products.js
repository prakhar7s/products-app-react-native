import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AppHeader from "../../components/app-header/app-header";
import CustomButton from "../../components/custom-button/custom-button";
import { OptionButton } from "../../components/option-buttons/option-buttons";
import SVGICon from "../../components/svg-icon/svg-icon";
import { CLOTH_COLORS, COLORS } from "../../constants/colors";
import { BUTTON_TYPES } from "../../constants/common";
import { IMAGES } from "../../constants/images";
import { commonStyles } from "../../styles/commonStyles";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import { getSizes } from "../../utils/getSizes";
import { PRODUCTS_LIST } from "../../data/DUMMY-DATA";
import { NAVIGATION } from "../../constants/navigation";

const numberOfCols = 2;

const AllProducts = (props) => {
  const { height, width } = getSizes();
  const { navigation } = props;
  return (
    <View style={styles.productDetails}>
      <AppHeader isHomeHeader title="DAPPER" isSearch isShop isBlack />
      <FlatList
        key={numberOfCols}
        numColumns={numberOfCols}
        keyExtractor={(item) => item?.id.toString()}
        data={PRODUCTS_LIST}
        ItemSeparatorComponent={() => <View style={[commonStyles.paddH5]} />}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View
            style={[
              styles.prodView,
              commonStyles.padd10,
              {
                width: width / numberOfCols,
              },
            ]}
          >
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(NAVIGATION.PRODUCT_DETAILS, { item });
              }}
              style={[commonStyles.padd10, styles.prodInnerView]}
            >
              <View>
                <Image
                  style={{ width: width / numberOfCols - 40, height: 170 }}
                  resizeMethod="resize"
                  resizeMode="contain"
                  source={item.image}
                />
              </View>
              <View style={[commonStyles.margV5]} />

              <Text style={styles.prodName}>{item?.name}</Text>
              <View style={[commonStyles.margV5]} />
              <Text style={styles.prodPrice}>{item?.price}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  productDetails: {
    backgroundColor: COLORS.black,
    flex: 1,
    paddingTop: 40,
  },

  prodView: {
    borderWidth: 1,
  },

  prodInnerView: {
    borderRadius: dynamicSize(12),
    backgroundColor: COLORS.productBg,
  },

  prodName: {
    fontSize: getFontSize(15),
    lineHeight: dynamicSize(17),
    color: COLORS.white,
    fontWeight: "500",
    textAlign: "left",
    width: "100%",
  },
  prodPrice: {
    fontSize: getFontSize(13),
    lineHeight: dynamicSize(18),
    color: COLORS.gold,
    fontWeight: "500",
    textAlign: "left",
    width: "100%",
  },
});
export { AllProducts };
