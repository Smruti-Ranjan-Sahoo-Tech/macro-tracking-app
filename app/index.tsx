import { Platform, Text, View } from "react-native";
import * as Device from "expo-device"
export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text>
        Running On : {Platform.OS}
      </Text>
      <Text>
        Device Name : {Device.modelName}
      </Text>
      <Text>
        Device Model : {Device.brand}
      </Text>
      <Text>
        Device os version : {Device.osVersion}
      </Text>

    </View>
  );
}
