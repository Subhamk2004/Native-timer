import { Text, View } from "react-native"
import { Tabs, Redirect } from "expo-router"

const TabsIcon = ({ name }) => {
    return (
        <View>
            <Text>
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        backgroundColor: '#161622',
                        borderColor: '#561921'
                    }
                }}
            >
                <Tabs.Screen
                    name="timer"
                    options={{
                        headerShown: false,
                        tabBarIcon: (() => {
                            <TabsIcon name="Timer" />
                        })
                    }}
                />
                <Tabs.Screen
                    name="clock"
                    options={{
                        headerShown: false,
                        tabBarIcon: (() => {
                            <TabsIcon name="Clock" />
                        })
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout