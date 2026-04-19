import { Header, HeaderTitle } from "@react-navigation/elements";
import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

export default function RootLayout() {
  return <Stack 
    screenOptions={{
      // headerTitle:"Raja bhai",
      headerShown:false
    }}>
      <Stack.Screen name="index"/>
      <Stack.Screen name="meals"/>

    </Stack>
}
