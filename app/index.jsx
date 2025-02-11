import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"


function index() {
    return (
        <SafeAreaView className="p-3">
            <Text className="text-white">
                Index file
            </Text>
        </SafeAreaView>
    )
}

export default index