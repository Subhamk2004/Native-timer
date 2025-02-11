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
                    name="home"
                    options={{
                        headerShown: false,
                        tabBarIcon: (() => {
                            <TabsIcon name="Home" />
                        })
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        headerShown: false,
                        tabBarIcon: (() => {
                            <TabsIcon name="Profile" />
                        })
                    }}
                />
            </Tabs>
        </>
    )
}

export default TabsLayout