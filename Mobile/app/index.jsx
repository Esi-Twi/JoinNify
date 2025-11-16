import { Image, StyleSheet, View } from 'react-native'
import React, { useEffect } from 'react'
import Text from '@/components/Text'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from "@/src/constants/theme"
import { useRouter } from 'expo-router'

const index = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.replace('/(tabs)/events')
    }, 2500);
  }, [])


  return (
    <SafeAreaView >
      <View style={styles.view}>
        <View style={[styles.imgView, styles.align]}>
          <Image style={styles.imgSmall} source={require('@/assets/persons/6.jpg')} />
          <Image style={styles.imgBig} source={require('@/assets/images/meetup2.webp')} />
        </View>

        <Text style={styles.name}>JoinNify</Text>

        <View style={styles.imgView}>
          <Image style={styles.imgBig} source={require('@/assets/persons/8.jpg')} />
          <Image style={styles.imgSmall} source={require('@/assets/persons/3.jpg')} />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  view: {
    backgroundColor: colors.indigo, 
    height: '100vh', 
    justifyContent: 'center', 
  },
  align: {
    alignItems: 'flex-end'
  },
  imgView: {
    flexDirection: 'row',
    justifyContent: 'center', 
    paddingHorizontal: 30, 
    gap: 40, 
  },
  imgSmall: {
    width: '22vw',
    height: '17vh',
    borderRadius: 38,
  },
  imgBig: {
    width: '38vw',
    height: '30vh',
    borderRadius: 70,
  },
  name: {
    fontFamily: 'lobster',
    textAlign: 'center',
    color: colors.white, 
    fontSize: 35, 
    paddingBottom: 8, 
  }
})