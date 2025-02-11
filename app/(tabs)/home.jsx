import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


function home() {
  return (
    <SafeAreaView className="p-3">
        <Text className="text-white">
            Hello from Home router
        </Text>
    </SafeAreaView>
  )
}

export default home