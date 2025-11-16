import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenWrapper = ({children}) => {
  return (
    <View style={styles.wrapper}>
      {children}
    </View>
  )
}

export default ScreenWrapper

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white', 
        height: '100%', 
        paddingVertical: 20, 
        paddingLeft: 20, 
    }
})