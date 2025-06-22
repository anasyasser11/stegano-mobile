import React, { useState } from 'react';
import {
  Text, TextInput, Image, TouchableOpacity,
  StyleSheet, ScrollView, Alert, ImageBackground,
} from 'react-native';
import { useRoute, useNavigation, RouteProp } from '@react-navigation/native';

type RouteParams = {
  imageUri: string;
};

let encodedMessage = '';

export function getStoredMessage() {
  return encodedMessage;
}

export default function SteganographyScreen() {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const navigation = useNavigation();

  const [imageUri] = useState<string | null>(route.params?.imageUri ?? null);
  const [message, setMessage] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleHideMessage = () => {
    if (!message.trim()) {
      Alert.alert('❗', 'Please enter a message before proceeding');
      return;
    }

    encodedMessage = message.trim();
    setShowResult(true);
  };

  const handleSaveImage = () => {
    Alert.alert('✅', 'The image has been saved successfully.');
    navigation.navigate('Decode');
  };

  return (
        <ImageBackground
          source={require('../assets/DE.png')}
          style={styles.background}
          resizeMode="cover"
        >
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Selected Image</Text>

      {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}

      {!showResult && (
        <>
          <TextInput
            style={styles.input}
            placeholder="hide this message..."
            placeholderTextColor="#aaa"
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={4}
          />

          <TouchableOpacity style={styles.button} onPress={handleHideMessage}>
            <Text style={styles.buttonText}>Encode</Text>
          </TouchableOpacity>
        </>
      )}

      {showResult && (
        <>
          <Text style={styles.resultText}>The resulting image:</Text>
          <Image source={{ uri: imageUri ?? '' }} style={styles.image} />

          <TouchableOpacity
            style={styles.button}
            onPress={handleSaveImage}
          >
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </>
      )}

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Cancel</Text>
      </TouchableOpacity>
    </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    padding: 20,
    alignItems: 'center',
    flexGrow: 1,
  },
  header: {
    marginTop:55,
    fontSize: 35,
    fontWeight: '800',
    marginBottom: 20,
    color: '#4988a5',
    textAlign: 'center',
  },
  image: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 20,
  },
  input: {
    borderColor: '#90a4ae',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: '100%',
    marginBottom: 15,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  },
    button: {
    backgroundColor:'#4988a5',
    paddingVertical: 15,
    marginTop: 20,
    width: '40%',
    borderRadius:20,
  },
  buttonText: {
    fontSize: 25,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
  resultText: {
    fontSize: 25,
    fontWeight: '600',

    marginTop: 20,
    color: '#4988a5',
  },
});
