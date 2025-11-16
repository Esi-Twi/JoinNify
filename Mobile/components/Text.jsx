import { StyleSheet, Text as RNText } from 'react-native'

const Text = ({children, style, props}) => {
  return (
    <RNText {...props} style={[styles.textStyle, style]}>
        {children}
    </RNText>
  )
}

export default Text

const styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'outfit', 
        fontSize: 16, 
    }
})