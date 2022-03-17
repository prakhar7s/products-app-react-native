import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { PLATFORM, SIZES } from "../constants/themes";
import { DUMMY_DATA } from "../data/DUMMY-DATA";
import ProductCard from "../components/ProductCard";
import { IMAGES } from "../constants/images";

const ProductsScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.paddingSafeArea} />

      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.paddingSafeArea} />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGES.BANNER_ONE} />
        </View>
        <View style={styles.paddingSafeArea} />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGES.BANNER_THREE} />
        </View>
        <View style={styles.paddingSafeArea} />
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={IMAGES.BANNER_TWO} />
        </View>
        <Text style={styles.title}>Available Products</Text>
        <View style={styles.productContainer}>
          {DUMMY_DATA.map((item, index) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </View>
        <View style={styles.paddingSafeArea} />
      </ScrollView>
    </View>
  );
};

// MARK: SCREEN OPTIONS
export function productsScreenOptions() {
  function TabBarIcon({ color }) {
    return <FontAwesome name="list" size={23} color={color} />;
  }

  return {
    tabBarIcon: TabBarIcon,
  };
}

// MARK: STYLE
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  paddingSafeArea: {
    height: PLATFORM.isSmallDevice ? 20 : 35,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: SIZES.WIDTH - 40,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
  title: {
    fontFamily: "POPPINS_400",
    fontSize: 20,
    marginTop: 20,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: "#CCC",
  },
  productContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
});

export default ProductsScreen;
