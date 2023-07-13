import { Camera, CameraType } from 'expo-camera';
import { useState,useEffect,useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { getStorage, ref,uploadBytes, getDownloadURL } from "firebase/storage";
import { manipulateAsync, ImageManipulator,FlipType, SaveFormat } from 'expo-image-manipulator';

// import RNFetchBlob from 'rn-fetch-blob';
// import {DocumentDirectoryPath, writeFile} from 'react-native-fs';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MSG_SENDER_ID, FIREBASE_APP_ID } from "@env";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



export const CameraContainer= ()=> {
  const firebaseConfig = {
    apiKey: "AIzaSyA_8yqR29-hsBsA7N-HQmjHr5n_RMYENdI",
    authDomain: "rhealm-b4991.firebaseapp.com",
    databaseURL: "https://rhealm-b4991-default-rtdb.firebaseio.com",
    projectId: "rhealm-b4991",
    storageBucket: "rhealm-b4991.appspot.com",
    messagingSenderId: "319527628749",
    appId: "1:319527628749:web:12de6f6957ea54b3ec9e84"
  };

  // Initialize Firebase
  const firebase = initializeApp(firebaseConfig);
  const auth = getAuth(firebase);
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [capturedImage, setCapturedImage] = useState(null);
  const [uploadImage, setUploadImage] = useState('')
  const cameraRef = useRef(null);
  // console.log(auth)
  // console.log(firebase)


  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePhoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setCapturedImage(photo.uri);
      console.log(photo.uri)

      const manipulate = await manipulateAsync(photo.uri,[],{compress:0.1 , format: SaveFormat.JPG})
      const storage = getStorage();
      const storageRef = ref(storage, 'images/' + Date.now() + '.jpg');
      const response = await fetch(manipulate.uri);
      const blob = await response.blob();
      try {
        await uploadBytes(storageRef, blob);
        const downloadURL = await getDownloadURL(storageRef);
        console.log(downloadURL)
        setUploadImage(downloadURL)
      } catch (err) {
        console.error(err.stack);
      }

    }
  }


  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={takePhoto} style={styles.button}>
            <Text style={styles.buttonText}>Take Photo</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      camera: {
        flex: 1,
        width: '100%',
      },
      buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
      },
      buttonText: {
        color: 'white',
        fontSize: 16,
      },
    });