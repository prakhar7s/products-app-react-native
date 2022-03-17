import React from "react";
import { StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";
import { dynamicSize } from "../utils/dynamicSize";

export const commonStyles = StyleSheet.create({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  justifyBetween: { justifyContent: "space-between" },
  justifyAround: { justifyContent: "space-around" },
  justifyEnd: { justifyContent: "flex-end" },

  justifyStart: { justifyContent: "flex-start" },

  alignItemsStart: {
    alignItems: "flex-start",
  },
  padd5: {
    padding: dynamicSize(5),
  },
  paddV5: {
    paddingVertical: dynamicSize(5),
  },
  paddH5: {
    paddingHorizontal: dynamicSize(5),
  },
  padd10: {
    padding: dynamicSize(10),
  },
  paddV10: {
    paddingVertical: dynamicSize(10),
  },
  paddH10: {
    paddingHorizontal: dynamicSize(10),
  },
  marg5: {
    margin: dynamicSize(5),
  },
  margV5: {
    marginVertical: dynamicSize(5),
  },
  margH5: {
    marginHorizontal: dynamicSize(5),
  },
  marg10: {
    margin: dynamicSize(10),
  },
  margV10: {
    marginVertical: dynamicSize(10),
  },
  margH7: {
    marginHorizontal: dynamicSize(7),
  },
  margH10: {
    marginHorizontal: dynamicSize(10),
  },
  margH16: {
    marginHorizontal: dynamicSize(16),
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderColor,
  },
});
