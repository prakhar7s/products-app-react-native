import { LogBox } from "react-native";

export const ignoreWarningLogs = () => {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    "VirtualizedLists should never be nested",
    "Non-serializable values were found in the navigation state",
    "Clipboard has been extracted from react-native core and will be removed in a future release",
    "Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state",
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  ]);
};
