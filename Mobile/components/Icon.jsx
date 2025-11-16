import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from "@/src/constants/theme"


const Icon = ({ style, name, size }) => {
    return (
        <TouchableOpacity style={[styles.headerNotification, style]}>
            <Ionicons name={name} size={size} style={styles.headerNotificationIcon} />
        </TouchableOpacity>
    )
}

export default Icon

const styles = StyleSheet.create({
    headerNotification: {
        backgroundColor: colors.light_indigo,
        borderRadius: "50%",
        padding: 10,
    },
    headerNotificationIcon: {
        color: colors.indigo,
    },
})