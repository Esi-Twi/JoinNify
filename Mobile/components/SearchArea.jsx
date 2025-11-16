import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'
import Icon from './Icon'
import { colors } from '../src/constants/theme'


const SearchArea = ({ style }) => {
    return (
        <View style={[styles.searchArea, style]}>
            <View style={styles.searchLeft}>
                <Icon name="search" size={18} />

                <TextInput placeholder='Search...' style={styles.searchInput} />
            </View>

            <TouchableOpacity style={styles.searchFilter}>
                <Icon name="filter" size={18} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchArea

const styles = StyleSheet.create({
    searchArea: {
        flexDirection: "row",
        alignContent: "center",
        justifyContent: "space-between",
        marginRight: 20,
    },
    searchLeft: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: '80%', 
    }, 
    searchInput: {
        backgroundColor: colors.light_indigo, 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderRadius: 20, 
        width: '100%', 
        outlineWidth: 0, 
        fontSize: 15, 
    }
})