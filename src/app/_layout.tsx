import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import "../../global.css";
export default function RootLayout() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1">APP</View>
    </SafeAreaView>
  );
}
