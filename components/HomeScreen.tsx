import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require('../assets/DE.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Image Steganography</Text>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4988a5' }]}
          onPress={() => navigation.navigate('ImagePicker')}
        >
          <Text style={styles.buttonText}>Encode</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4988a5' }]}
          onPress={() => navigation.navigate('ImagePickerWith')}
        >
          <Text style={styles.buttonText}>Decode</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 40,
    color:'#4988a5',
    textAlign: 'center',
  },
  button: {
    paddingVertical: 15,
    marginVertical: 10,
    width: '40%',
    borderRadius:20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
