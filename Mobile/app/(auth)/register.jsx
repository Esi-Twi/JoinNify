import { Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { Colors } from '../../constants/theme';

const Register = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Attendee', value: 'Attendee' },
    { label: 'Organizer', value: 'Organizer' },
  ]);

  return (
    <ScrollView>
      <Image style={styles.img} source={require("../../assets/images/meetup2.webp")} />

      {/* content */}
      <View style={styles.content}>
        <Text style={styles.header}>Create Account</Text>

        <View >
          <View style={styles.inputBox}>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} secureTextEntry />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Role</Text>

            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              style={styles.select}
            />
          </View>

          <View>
            
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <View>
            <Text></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  img: {
    height: 400,
  }, 
  content: {
    backgroundColor: 'white', 
    borderTopRightRadius: 140, 
    marginTop: -120,
    borderCurve: 'continuous', 
    paddingHorizontal: 20, 
    paddingVertical: 30, 
    marginBottom: 20, 
  }, 
  header: {
    fontFamily: 'lobster', 
    fontWeight: 'bold', 
    fontSize: 30, 
    marginBottom: 20, 
  }, 
  inputBox: {
    marginBottom: 18, 
  },
  label: {
    fontSize: 18, 
    marginBottom: 5, 
  }, 
  input: {
    borderWidth: 0.5, 
    borderColor: Colors.text_secondary, 
    fontSize: 15, 
    borderRadius: 5, 
    paddingVertical: 8, 
    paddingHorizontal: 8, 
    outlineColor: 0, 
    width: '85%', 
  }, 
  button: {
    backgroundColor: Colors.indigo,
    borderRadius: 25, 
    marginTop: 20, 
    paddingVertical: 10, 
  }, 
  buttonText: {
    textAlign: 'center', 
    fontSize: 16, 
    color: Colors.white,
  }, 
  select: {
    width: '85%', 
  }

})