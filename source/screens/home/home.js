import React from "react";
import { Image, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import SVGICon from "../../components/svg-icon/svg-icon";
import { COLORS } from "../../constants/colors";
import { IMAGES } from "../../constants/images";
import { dynamicSize } from "../../utils/dynamicSize";
import { ProductDetails } from "../product-details/product-details";
import ProductsScreen from "../ProductsScreen";
import CartScreen from "../CartScreen";

const Bottom = createMaterialBottomTabNavigator();

const Common = (props) => (
  <View>
    <Text
      style={{
        color: COLORS.primary,
        textAlign: "center",
        lineHeight: dynamicSize(200),
      }}
    >
      {props?.text}
    </Text>
  </View>
);

const Following = () => <Common text="Following" />;

const Hello = () => (
  <View>
    <Text style={{ color: "red" }}>sdad</Text>
  </View>
);

const Home = () => {
  return (
    <Bottom.Navigator
      tabBar
      initialRouteName="HOME"
      activeColor={COLORS.primary}
      inactiveColor={COLORS.inactiveTabColor50}
      barStyle={{
        backgroundColor: "#fff",
        height: dynamicSize(65),
      }}
      shifting={false}
    >
      <Bottom.Screen
        name="FeaturedX"
        component={ProductsScreen}
        options={{
          tabBarLabel: "Products",
          tabBarIcon: ({ color }) => (
            <SVGICon
              name="HOME"
              fill={color}
              strokeWidth={1}
              width={32}
              height={28}
              containerStyle={{ marginBottom: 6 }}
            />
          ),
        }}
      />

      <Bottom.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: "Cart",
          tabBarIcon: ({ color }) => (
            <SVGICon
              name="USER"
              fill={color}
              strokeWidth={1}
              width={32}
              height={28}
            />
          ),
        }}
      />
    </Bottom.Navigator>
  );
};

export default Home;
