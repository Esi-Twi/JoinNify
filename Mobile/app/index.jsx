import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

const index = () => {
  return (
    <View>
      <Text>index</Text>

      <TouchableOpacity onPress={() =>router.push("/(auth)/register")}>
        <Text>register</Text>
      </TouchableOpacity> 

    </View>
  )
}

export default index

const styles = StyleSheet.create({})