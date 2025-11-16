import { Image, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from '@/components/Text'
import { SafeAreaView } from 'react-native-safe-area-context'
import ScreenWrapper from '../../components/ScreenWrapper'
import Ionicons from '@expo/vector-icons/Ionicons'
import { colors } from "@/src/constants/theme"
import { useRouter } from 'expo-router'



const tickets = () => {

    const router = useRouter()

    return (
        <ScreenWrapper>
            <SafeAreaView>
                <ScrollView>
                    {/* header */}
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => router.back()}>
                            <Ionicons name='arrow-back' size={24} />
                        </TouchableOpacity>

                        <Text style={styles.headerText}>Ticket</Text>
                    </View>

                    {/* content  */}
                    <View style={styles.card}>
                        {/* image */}
                        <View>
                            <Image style={styles.cardImg} source={require('../../assets/persons/3.jpg')} />

                            <TouchableOpacity style={styles.cardButton}>
                                <Ionicons name='menu' size={20}/>
                            </TouchableOpacity>
                        </View>
                        {/* card content */}
                        <View>
                            
                        </View>

                    </View>


                </ScrollView>
            </SafeAreaView>
        </ScreenWrapper>
    )
}

export default tickets

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        gap: '30%',
    },
    headerText: {
        fontFamily: 'outfit-bold',
        fontSize: 20,
        color: colors.indigo,
    }, 
    card: {
        marginTop: 20, 
    },
    cardImg: {
        height: '40vh', 
        borderRadius: 30, 
    }, 
    cardButton: {
        position: 'absolute', 
        top: 10,
        left: 10,  
        backgroundColor: colors.white, 
        padding: 5, 
        borderRadius: '50%', 
    }


})