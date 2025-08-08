import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Logo and Title */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/Vector.png')} style={styles.logo} />
        <Text style={styles.title}>ReadLink</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>I have an account</Text>
        </TouchableOpacity>
      </View>

      {/* Pagination Dots */}
      <View style={styles.pagination}>
        {Array.from({ length: 6 }).map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === 5 ? { backgroundColor: '#00FF84' } : null,
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23085A',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 50,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: '#5B18D5',
    borderRadius: 30,
    paddingVertical: 15,
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pagination: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
});

export default WelcomeScreen;
