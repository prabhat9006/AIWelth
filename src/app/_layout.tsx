import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import "../../global.css";

export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">
        <Slot />
      </View>
    </SafeAreaView>
  );
}
