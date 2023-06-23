import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CameraContainer= ()=> {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
  
    // if (!permission) ... 
  
    // if (!permission.granted) ... 
  
    function toggleCameraType() {
      setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
  
    return (
        <View style={styles.container}>
          <Camera style={styles.camera}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={toggleCameraType} style={styles.button}>
                <Text style={styles.buttonText}>Flip Camera</Text>
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