import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground
} from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

export default function ImagePickerScreen({ navigation }: any) {
  const handlePickImage = () => {
    launchImageLibrary({ mediaType: 'photo' }, (response) => {
      if (response.didCancel) {
        navigation.navigate('Home');
      } else if (response.assets && response.assets.length > 0) {
        const imageUri = response.assets[0].uri;

        if (!imageUri) {
          Alert.alert('خطأ', 'لم يتم العثور على مسار الصورة.');
          return;
        }

        // نرسل الصورة مباشرة كما هي
        navigation.navigate('Steganography', { imageUri });
      } else {
        Alert.alert('خطأ', 'فشل في اختيار الصورة.');
      }
    });
  };

  return (
    <ImageBackground
                source={require('../assets/DE.png')}
                style={styles.background}
                resizeMode="cover"
              >
    <View style={styles.container}>
      <Text style={styles.text}>Select the Image :</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4988a5' }]}
        onPress={handlePickImage}
      >
        <Text style={styles.buttonText}>Select</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4988a5' }]}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Cancel</Text>
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    fontSize: 35,
    marginBottom: 40,
    color: '#4988a5',
    textAlign: 'center',
    fontWeight: '800',
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
