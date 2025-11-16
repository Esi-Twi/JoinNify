import { StyleSheet, View } from 'react-native'
import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from "../../src/constants/theme"
import Text from "../../components/Text"



const TabIcon = ({ focused, icon, name }) => {
    if (focused) {
        return (
            <View style={styles.viewFocused}>
                <Ionicons name={icon} size={20} style={styles.iconFocused} />
                <Text style={styles.tabName}>{name}</Text>
            </View>
        )
    }

    return (
        <View style={styles.view}>
            <Ionicons name={icon} size={24} style={styles.icon} />
        </View>
    )
}

const Layout = () => {
    return (
        <Tabs screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                marginHorizontal: 30,
                paddingTop: 5, 
                position: 'absolute',
                bottom: 35,
                border: 'none',
                borderRadius: 50,
                height: 50,
                backgroundColor: colors.light_indigo, 
            }
        }}>
            <Tabs.Screen name='events'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon="home"
                            name="Home"
                        />
                    )
                }}
            />

            <Tabs.Screen name='booking'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon="heart-outline"
                            name="Bookings"
                        />
                    )
                }}
            />

            <Tabs.Screen name='settings'
                options={{
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon="settings"
                            name="Settings"
                        />
                    )
                }}
            />

        </Tabs>
    )
}

export default Layout

const styles = StyleSheet.create({
    view: {
        color: colors.indigo
    },
    icon: {
        color: colors.indigo
    },
    viewFocused: {
        backgroundColor: colors.indigo,
        paddingHorizontal: 7,
        paddingVertical: 6, 
        borderRadius: 25,
        flexDirection: "row", 
        gap: 10, 
        paddingHorizontal: 25, 
        paddingVertical: 12, 
    },
    iconFocused: {
        color: colors.white
    }, 
    tabName: {
        color: colors.white,
    }
})