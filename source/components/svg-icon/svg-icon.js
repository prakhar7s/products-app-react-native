import React from "react";
import SvgIcon from "react-native-svg-icon";
import { SVGS } from "../../constants/svgs";

const SVGICon = (props) => {
  return <SvgIcon svgs={SVGS} {...props} />;
};

export default SVGICon;
