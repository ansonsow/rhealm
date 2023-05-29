import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react'
import axios from 'axios';

export default function App() {
  const [wa,setWa] = useState("")
  axios.get("http://localhost:8000/api/v1/test").then((response)=>{
    setWa(response.data[0].name)
  })
  return (
    <View style={styles.container}>
      <Text>{wa}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
