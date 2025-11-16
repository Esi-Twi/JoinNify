import { Image, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useRouter } from 'expo-router'
import Text from '@/components/Text'
import ScreenWrapper from '../../components/ScreenWrapper'
import Ionicons from '@expo/vector-icons/Ionicons'


const booking = () => {
    const router = useRouter()

    return (
        <ScreenWrapper>
            {/* header */}
            <View>
                <View>
                    <Image />
                    <View>
                        <Text>Los Angelos</Text>

                        <View></View>
                    </View>
                </View>

                <TouchableOpacity>
                    <Ionicons name='time' size={24}/>
                </TouchableOpacity>
            </View>



           

        </ScreenWrapper>
    )
}

export default booking

const styles = StyleSheet.create({})