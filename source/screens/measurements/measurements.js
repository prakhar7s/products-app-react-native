import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Button,
  Image,
  TouchableOpacity,
  Text,
} from "react-native";
import AppHeader from "../../components/app-header/app-header";
import { COLORS } from "../../constants/colors";
import { dynamicSize, getFontSize } from "../../utils/dynamicSize";
import * as ImagePicker from "expo-image-picker";
import SVGICon from "../../components/svg-icon/svg-icon";
import { commonStyles } from "../../styles/commonStyles";
import { fetchPost } from "../../utils/fetchPost";
import StatusBar from "../../utils/StatusBar";

const Measurements = () => {
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const pickImageFromCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const pickImageFromGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const getMeasurements = async () => {
    const data = await fetchPost(
      "https://mobile.msways.com/api/ms_initialize_user",
      {
        apiKey:
          "QgU9sQdg9hnxUz3ak1hSMoyFoE2vBUMVmUYqHMLDu9myrhK5z3LNNEcgRMuGYv29",
        merchantid: "akshat.tulsani03@gmail.com",
        productname: "GET_MEASURED",
        gender: "male",
      }
    );
    console.log(data);
    setStatus(`API Call 1 : ${data?.message}`);
    if (data && data?.code === "1") {
      const data2 = await fetchPost(
        "https://api.mysize.mirrorsize.com/api/ms_measurement_process",
        {
          userId: data?.userId,
          angle: "90",
          height: "1700",
          weight: "89",
          age: "25",
          gender: "male",
          productname: "GET_MEASURED",
          userName: "Divay",
          userMobile: "7206422605",
          apiKey:
            "QgU9sQdg9hnxUz3ak1hSMoyFoE2vBUMVmUYqHMLDu9myrhK5z3LNNEcgRMuGYv29",
          merchantid: "akshat.tulsani03@gmail.com",
          mobilemodel: "Iphone7",
          fitType: "tightfit",
          frontImage: image,
        }
      );
      setStatus(`API Call 2 : ${data2?.message}`);

      console.log(data2);
      if (data2 && data2?.code === "1") {
        const data3 = await fetchPost(
          "https://api.mysize.mirrorsize.com/api/ms_getRecommendation",
          {
            apiKey:
              "QgU9sQdg9hnxUz3ak1hSMoyFoE2vBUMVmUYqHMLDu9myrhK5z3LNNEcgRMuGYv29",
            apparelName: "Shirt",
            brandName: "Raymond",
            gender: "male",
            merchantid: "akshat.tulsani03@gmail.com",
            productname: "GET_MEASURED",
            userId: data?.userId,
          }
        );
        setStatus(`API Call 3 : ${data3?.message}`);

        console.log(data3);
      }
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />

      <AppHeader title="Measurements" isSearch isBlack />
      <View style={[commonStyles.padd10, styles.innerView]}>
        <Text style={[commonStyles.margV10, styles.title]}>
          Upload Image From
        </Text>
        <View
          style={[
            commonStyles.flexRow,
            commonStyles.margV10,
            commonStyles.justifyAround,
          ]}
        >
          <TouchableOpacity
            onPress={pickImageFromCamera}
            style={[commonStyles.flexRow, styles.optView]}
          >
            <SVGICon
              name="CAMERA"
              strokeWidth={1}
              width={20}
              height={20}
              fill={COLORS.black}
            />
            <Text style={[commonStyles.margH10]}>Camera</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={pickImageFromGallery}
            style={[commonStyles.flexRow]}
          >
            <SVGICon
              name="GALLERY"
              strokeWidth={1}
              width={20}
              height={20}
              fill={COLORS.black}
            />
            <Text style={[commonStyles.margH10]}>Gallery</Text>
          </TouchableOpacity>
        </View>

        {image && (
          <View
            style={[
              styles.imgContainer,
              commonStyles.margV10,
              commonStyles.paddV10,
            ]}
          >
            <Image
              resizeMode="contain"
              resizeMethod="scale"
              source={{ uri: image }}
              style={styles.img}
            />
            <View style={[commonStyles.margV10, commonStyles.paddV10]}>
              <Button
                color={COLORS.black}
                title="Get Measurements"
                onPress={getMeasurements}
              />
            </View>

            <Text>{status}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00000010",
    flex: 1,
  },
  title: {
    color: COLORS.black,
    fontSize: getFontSize(18),
    fontWeight: "600",
    lineHeight: dynamicSize(32),
  },
  imgContainer: { width: "100%", height: 250 },
  img: {
    height: "100%",
    width: "100%",
  },
});
export default Measurements;
