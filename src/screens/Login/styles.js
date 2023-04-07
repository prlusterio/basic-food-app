import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20
    },
    title: {
      fontSize: 32,
      fontWeight: 'semibold',
      marginBottom: 40
    },
    inputContainer: {
      width: '100%',
      marginBottom: 20
    },
    label: {
      fontWeight: 400,
      marginBottom: 5,
      fontSize: 18,
      color: '#959595',
      marginBottom: 10
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      fontSize: 18,
      height: 55
    },
    button: {
      backgroundColor: '#FFA800',
      borderRadius: 15,
      width: '100%',
      height: 60,
      justifyContent: 'center',
      marginTop: 20
    },
    buttonText: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    signupTextcontainer: {
      flexDirection: 'row',
      marginTop: 20
    },
    signupText: {
      fontSize: 16,
      color: '#959595'
    },
    signupTextPrimary: {
      marginLeft: 2,
      fontWeight: 'bold',
      fontSize: 16,
      color: '#FFA800'
    }
  });