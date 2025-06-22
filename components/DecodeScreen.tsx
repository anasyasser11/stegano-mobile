import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native';
import { getStoredMessage } from './SteganographyScreen';

type RouteParams = {
  imageUri: string;
};

export default function DecodeScreen() {
  const route = useRoute<RouteProp<Record<string, RouteParams>, string>>();
  const navigation = useNavigation();
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    const uri = route.params?.imageUri;
    setImageUri(uri ?? null);

    const storedMessage = getStoredMessage();
    setMessage(storedMessage || 'No hidden message found');
  }, [route.params]);

  return (
    <ImageBackground
      source={require('../assets/DE.png')}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Selected Image</Text>

        {imageUri && (
          <Image source={{ uri: imageUri }} style={styles.image} />
        )}

        <View style={styles.messageBox}>
          <Text style={styles.label}>Hidden data is:</Text>
          <Text style={styles.messageText}>{message}</Text>
        </View>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#4988a5' }]}
          onPress={() => navigation.navigate('Home')}
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
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 30,
     fontWeight: '800',
    color: '#4988a5',
     paddingTop: 50,
    textAlign: 'center',
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: 'contain',
    borderRadius: 10,
    marginBottom: 20,
  },
  messageBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    width: '100%',
    maxWidth: 400,
    elevation: 3,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4988a5',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 16,
    color: '#37474f',
  },
    button: {
    paddingVertical: 15,
    marginVertical: 50,
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
