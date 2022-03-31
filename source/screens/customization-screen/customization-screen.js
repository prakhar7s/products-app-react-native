import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import AppHeader from "../../components/app-header/app-header";
import CustomButton from "../../components/custom-button/custom-button";
import SVGICon from "../../components/svg-icon/svg-icon";
import { COLORS } from "../../constants/colors";
import { IMAGES } from "../../constants/images";
import { commonStyles } from "../../styles/commonStyles";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import { getSizes } from "../../utils/getSizes";

const SECTIONS = [
  {
    name: "SELECT CUFF",
    bg: IMAGES.TSHIRT_OUTLINE_LEFT,
    incTo: 1,
    types: [
      "Round cuff",
      "Angled cuff",
      "Two buttonhole cuff",
      "Straight (or Square) cuff",
      "Short straight or Square cuff",
    ],
  },
  {
    name: "SELECT COLLAR",
    bg: IMAGES.TSHIRT_OUTLINE_RIGHT,
    incTo: 2,
    types: [
      "The Club Collar",
      "The Spear Collar",
      "The Button-Down Collar",
      "The Band Collar",
      "The Spread Collar",
    ],
  },
  {
    name: "SELECT CUFF",
    bg: IMAGES.TSHIRT_OUTLINE_FULL,
    incTo: 0,
    types: [
      "Round cuff",
      "Angled cuff",
      "Two buttonhole cuff",
      "Straight (or Square) cuff",
      "Short straight or Square cuff",
    ],
  },
];

const Section = ({ sectionData, setSection }) => {
  return (
    <View style={[commonStyles.flexCol, styles.sectionThree]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          commonStyles.padd10,
          commonStyles.flexCol,
          commonStyles.justifyAround,
          styles.productDetailThirdView,
        ]}
      >
        <View>
          <Text style={[commonStyles.margV10, styles.heading]}>
            {sectionData?.name}
          </Text>
          <View
            style={[
              commonStyles.flexCol,
              commonStyles.alignItemsStart,
              commonStyles.justifyStart,
            ]}
          >
            {sectionData?.types?.map((type) => (
              <View
                style={[commonStyles.flexRow, commonStyles.margV10]}
                key={type}
              >
                <View style={[commonStyles.margH10]}>
                  <Image source={IMAGES.SILK} />
                </View>

                <View>
                  <Text style={[commonStyles.margH10]}>{type}</Text>
                  <Text style={[commonStyles.margH10]}>
                    Velit ipsum cillum quis anim eundjdln eiusmod laborum
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View style={[commonStyles.margV5]} />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: -25,
          right: 70,
        }}
      >
        <TouchableOpacity
          style={[
            commonStyles.flexRow,
            styles.rightSide,
            { width: 50, height: 50 },
          ]}
          onPress={() => setSection(sectionData?.incTo)}
        >
          <SVGICon
            name="NEXT_ARROW"
            width={22}
            height={22}
            fill={COLORS.white}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CustomizationScreen = (props) => {
  const { height, width } = getSizes();
  const [section, setSection] = useState(0);

  return (
    <View style={styles.productDetails}>
      <AppHeader isHomeHeader title="BRAND NAME" isSearch isShop isBlack />

      <View style={[commonStyles.flexCol, { height: height * 0.7 }]}>
        <Image
          source={SECTIONS[section]?.bg}
          style={[
            styles.bgImage,
            {
              width: section == 2 ? width : width * 0.6,
              height: height * 0.9,
            },
            section === 1
              ? {
                  left: 0,
                }
              : {
                  right: 0,
                },
          ]}
          resizeMethod="auto"
          resizeMode="contain"
        />
      </View>

      <Section sectionData={SECTIONS[section]} setSection={setSection} />
    </View>
  );
};
const styles = StyleSheet.create({
  productDetails: {
    backgroundColor: COLORS.black,
    flex: 1,
  },
  bgImage: {
    position: "absolute",
    top: 0,
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
  sectionTwo: {
    position: "absolute",
    top: "65%",
    width: "100%",
  },
  line: {
    width: dynamicSize(50),
    borderBottomColor: COLORS.borderColor,
    borderBottomWidth: 1,
  },
  productDetailSecondView: {
    backgroundColor: COLORS.white,
    borderRadius: dynamicSize(4),
    width: "70%",
    alignSelf: "flex-end",
    height: dynamicSize(250),
    alignItems: "flex-start",
    marginRight: dynamicSize(20),
  },
  prodName: {
    fontSize: getFontSize(18),
    lineHeight: dynamicSize(21),
    color: COLORS.boldTextColor,
    fontWeight: "300",
  },
  prodPriceGold: {
    fontSize: getFontSize(15),
    lineHeight: dynamicSize(18),
    color: COLORS.gold,
    fontWeight: "300",
  },
  description: {
    fontSize: getFontSize(11),
    lineHeight: dynamicSize(18),
    color: COLORS.boldTextColor,
    fontWeight: "300",
  },
  productDetailThirdView: {
    backgroundColor: COLORS.white,
    borderRadius: dynamicSize(6),
    width: "78%",
    alignSelf: "center",
    alignItems: "flex-start",
  },
  heading: {
    fontSize: getFontSize(13),
    lineHeight: dynamicSize(16),
    color: COLORS.lightGray,
    fontWeight: "500",
  },
  sectionThree: {
    position: "absolute",
    top: "35%",
    width: "100%",
    height: dynamicSize(300),
  },
});
export { CustomizationScreen };
