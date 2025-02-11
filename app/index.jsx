import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function Index() {
    return (
        <SafeAreaView className="flex-1 bg-gray-900 items-center justify-center p-6">
            {/* Header Section */}
            <View className="items-center mb-8">
                <Ionicons name="time-outline" size={100} color="#F8F8F8" />
                <Text className="text-4xl font-bold text-white mt-4">Timer App</Text>
                <Text className="text-lg text-gray-400 mt-2">Make Every Second Count!</Text>
            </View>

            {/* Description */}
            <Text className="text-gray-300 text-center text-lg mb-12">
                Track your time and boost your productivity. Set up timers, monitor your focus, and achieve your goals—one tick at a time.
            </Text>

            {/* Action Button */}
            <TouchableOpacity
                className="bg-green-600 py-3 px-6 rounded-full flex-row items-center shadow-lg"
                onPress={() => router.push("./home")}
            >
                <MaterialIcons
                    name="play-arrow"
                    size={24}
                    color="#FFFFFF"
                    style={{ marginRight: 8 }}
                />
                <Text className="text-white text-lg font-semibold">Start Timer</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}