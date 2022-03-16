//Module
import { Dimensions } from "react-native";
// User screen Dimenssions and Calculation For UI that fits for each and every device

const { width } = Dimensions.get("window");
const STANDARD_WIDTH = 375;
const CURRENT_WIDTH = width;
const K = CURRENT_WIDTH / STANDARD_WIDTH;

const USE_FOR_BIGGER_SIZE = true;

export function dynamicSize(size) {
  return K * size;
}

export function getFontSize(size) {
  if (USE_FOR_BIGGER_SIZE || CURRENT_WIDTH < STANDARD_WIDTH) {
    return dynamicSize(size);
  }
  return size;
}
