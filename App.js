import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { useState } from 'react'
// import axios from 'axios';
import { NativeBaseProvider } from 'native-base';
import { AppStack } from './src/components/stacks/AppStack';

export default function App() {
  // const [wa, setWa] = useState("")
  // axios.get("http://localhost:8000/api/v1/test").then((response) => {
  //   setWa(response.data[0].name)
  // })

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <Text>{wa}</Text> */}
        <AppStack />
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingLeft: 20,
    paddingTop: 50
  },
});
