import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const SignUpScreen = () => {
  const insets = useSafeAreaInsets();
  console.log("SignUpScreen loaded"); // This will show in DevTools console, not terminal

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom
        }
      ]}
    >
      <Text style={styles.backArrow}>{'\u2190'}</Text>
      <Text style={styles.title}>Create New Account</Text>

      <TextInput style={styles.input} placeholder="Full name" placeholderTextColor="#ccc" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#ccc" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#ccc" secureTextEntry />

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupText}>Sign up</Text>
      </TouchableOpacity>

      <Text style={styles.signinText}>or Sign In with</Text>

      <View style={styles.socialContainer}>
        <Image source={require('../assets/Apple_logo.png')} style={styles.socialIcon} />
        <Image source={require('../assets/f.png')} style={styles.socialIcon} />
        <Image source={require('../assets/Google_logo.png')} style={styles.socialIcon} />
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26046d',
    paddingHorizontal: 30,
  },
  backArrow: {
    fontSize: 24,
    color: 'white',
    marginBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    color: 'white',
    marginBottom: 25,
    paddingVertical: 5,
  },
  signupButton: {
    backgroundColor: '#ae84e4',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  signupText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  signinText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 15,
  },
  socialIcon: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
