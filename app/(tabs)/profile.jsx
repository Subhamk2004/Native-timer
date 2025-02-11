import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


function profile() {
    return (
        <SafeAreaView className="p-3">
            <Text className="text-white">
                Hello from profile router
            </Text>
        </SafeAreaView>
    )
}

export default profile