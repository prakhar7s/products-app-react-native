import { useWindowDimensions } from "react-native";

export const getSizes = () => {
  const { height, width } = useWindowDimensions();

  return { height, width };
};
