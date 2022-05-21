import { NavigationContainer, useNavigation } from "@react-navigation/native";
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
import { OptionButton } from "../../components/option-buttons/option-buttons";
import SVGICon from "../../components/svg-icon/svg-icon";
import { CLOTH_COLORS, COLORS } from "../../constants/colors";
import { BUTTON_TYPES } from "../../constants/common";
import { IMAGES } from "../../constants/images";
import { commonStyles } from "../../styles/commonStyles";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import { getSizes } from "../../utils/getSizes";
import { NAVIGATION } from "../../constants/navigation";

const SectionOne = ({ setSection }) => {
  const { height, width } = getSizes();

  return (
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
        <TouchableOpacity
          onPress={() => setSection(2)}
          style={[styles.leftSide, commonStyles.justifyAround]}
        >
          <Text style={styles.prodNameLight}>
            BLACK <Text style={styles.prodNameBold}>TWO-PIECE</Text>
          </Text>
          <Text style={styles.prodPrice}>INR 30,000</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSection(1)}
          style={[commonStyles.flexRow, styles.rightSide]}
        >
          <SVGICon name="SHOP" width={22} height={22} fill={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SectionTwo = ({ setSection }) => {
  const { height, width } = getSizes();

  return (
    <View
      style={[
        commonStyles.flexCol,
        styles.sectionTwo,
        {
          height: height * 0.2,
        },
      ]}
    >
      <View
        style={[
          commonStyles.padd10,
          commonStyles.flexCol,
          commonStyles.justifyAround,
          styles.productDetailSecondView,
        ]}
      >
        <View>
          <Text style={styles.prodName}>BLACK TWO-PIECE</Text>
          <Text style={[commonStyles.margV10, styles.prodPriceGold]}>
            INR 30,000
          </Text>

          <View style={[commonStyles.margV10, styles.line]} />
        </View>

        <View>
          <Text style={styles.description}>
            Velit ipsum cillum quis anim eu eiusmod laborum aliquip consectetur
            proident commodo.Velit ipsum cillum quis anim eu eiusmod laborum
            aliquip consectetur proident commodo. consectetur proident commodo.
          </Text>
        </View>

        <View style={[commonStyles.flexRow, commonStyles.justifyEnd]}>
          <CustomButton
            onPressHandler={() => setSection(2)}
            title="CUSTOMIZE"
            textColor={COLORS.gold}
            isBackground
          />
        </View>
      </View>
    </View>
  );
};

const SectionThree = () => {
  const { height, width } = getSizes();
  const navigation = useNavigation();

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
            SELECT SIZE
          </Text>
          <View
            style={[
              commonStyles.flexRow,
              commonStyles.alignItemsStart,
              commonStyles.justifyStart,
            ]}
          >
            <OptionButton
              type={BUTTON_TYPES.SIZE}
              title="S"
              borderColor={COLORS.lightGray}
              color={COLORS.lightGray}
              size={40}
              fontSize={15}
            />
            <View style={[commonStyles.margH7]} />
            <OptionButton
              type={BUTTON_TYPES.SIZE}
              title="M"
              borderColor={COLORS.lightGray}
              color={COLORS.lightGray}
              size={40}
              fontSize={15}
            />
            <View style={[commonStyles.margH7]} />
            <OptionButton
              type={BUTTON_TYPES.SIZE}
              title="L"
              isActive
              borderColor={COLORS.lightGray}
              color={COLORS.lightGray}
              size={40}
              fontSize={15}
            />
            <View style={[commonStyles.margH7]} />
            <OptionButton
              type={BUTTON_TYPES.SIZE}
              title="XL"
              isDisable
              borderColor={COLORS.lightGray}
              color={COLORS.lightGray}
              size={40}
              fontSize={15}
            />
            <View style={[commonStyles.margH7]} />
            <OptionButton
              type={BUTTON_TYPES.SIZE}
              title="+"
              borderColor={COLORS.lightGray}
              color={COLORS.lightGray}
              size={40}
              fontSize={28}
            />
          </View>
        </View>
        <View style={[commonStyles.margV10]} />

        <View>
          <Text style={[commonStyles.margV10, styles.heading]}>
            SELECT COLOR
          </Text>
          <View
            style={[
              commonStyles.flexRow,
              commonStyles.alignItemsStart,
              commonStyles.justifyStart,
            ]}
          >
            <OptionButton
              type={BUTTON_TYPES.COLOR}
              borderColor={COLORS.lightGray}
              color={CLOTH_COLORS.rose}
              size={40}
            />
            <View style={[commonStyles.margH7]} />
            <OptionButton
              type={BUTTON_TYPES.COLOR}
              borderColor={COLORS.lightGray}
              color={CLOTH_COLORS.green}
              size={40}
              isActive
            />
            <View style={[commonStyles.margH7]} />
            <OptionButton
              type={BUTTON_TYPES.COLOR}
              borderColor={COLORS.lightGray}
              color={CLOTH_COLORS.yellow}
              size={40}
            />
            <View style={[commonStyles.margH7]} />
            <OptionButton
              type={BUTTON_TYPES.COLOR}
              borderColor={COLORS.lightGray}
              color={CLOTH_COLORS.blue}
              size={40}
            />
            <View style={[commonStyles.margH7]} />
            <OptionButton
              type={BUTTON_TYPES.SIZE}
              title="+"
              borderColor={COLORS.lightGray}
              color={COLORS.lightGray}
              size={40}
              fontSize={28}
            />
          </View>
        </View>
        <View style={[commonStyles.margV10]} />

        <View>
          <Text style={[commonStyles.margV10, styles.heading]}>
            FABRIC TYPE
          </Text>
          <View
            style={[
              commonStyles.flexCol,
              commonStyles.alignItemsStart,
              commonStyles.justifyStart,
            ]}
          >
            {[1, 2, 3].map((item) => (
              <View
                style={[commonStyles.flexRow, commonStyles.margV10]}
                key={item}
              >
                <View style={[commonStyles.margH10]}>
                  <Image source={IMAGES.SILK} />
                </View>

                <View>
                  <Text style={[commonStyles.margH10]}>Silk</Text>
                  <Text style={[commonStyles.margH10]}>
                    Velit ipsum cillum quis anim eundjdln eiusmod laborum
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={[commonStyles.margV10]} />
        <View
          style={[
            commonStyles.flexRow,
            commonStyles.justifyEnd,
            {
              width: "100%",
              alignItems: "center",
            },
          ]}
        >
          <TouchableOpacity
            style={[
              commonStyles.flexRow,
              styles.rightSide,
              { flex: 0.2, height: 44 },
            ]}
            onPress={() => navigation.navigate(NAVIGATION.CUSTOMIZATION_SCREEN)}
          >
            <SVGICon name="SHOP" width={22} height={22} fill={COLORS.white} />
          </TouchableOpacity>
          <View style={{ flex: 0.4 }}>
            <CustomButton title="CANCEL" textColor={COLORS.gold} isBackground />
          </View>
        </View>
        <View style={[commonStyles.margV5]} />
      </ScrollView>
    </View>
  );
};

const ProductDetails = (props) => {
  const { height, width } = getSizes();
  const [section, setSection] = useState(0);

  const { item } = props?.route?.params || {};

  return (
    <View style={styles.productDetails}>
      <AppHeader isHomeHeader title="BRAND NAME" isSearch isShop isBlack />

      <View style={[commonStyles.flexCol, { height: height * 0.7 }]}>
        <Image
          source={item?.image}
          style={{
            width,
            height: "80%",
          }}
          resizeMethod="auto"
          resizeMode="contain"
        />
      </View>
      {section === 0 && <SectionOne setSection={setSection} />}
      {section === 1 && <SectionTwo setSection={setSection} />}
      {section === 2 && <SectionThree setSection={setSection} />}
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
    top: "65%",
    width: "100%",
    height: dynamicSize(300),
  },
});
export { ProductDetails };
