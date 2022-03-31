import { LogBox } from "react-native";

export const ignoreWarningLogs = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    "VirtualizedLists should never be nested",
    "Non-serializable values were found in the navigation state",
    "Clipboard has been extracted from react-native core and will be removed in a future release",
  ]);
};
