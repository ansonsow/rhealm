import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { useState } from 'react'
// import axios from 'axios';
import { NativeBaseProvider } from 'native-base';
import { SignUpContainer } from './src/components/containers/SignUpContainer';
import { LoginContainer } from './src/components/containers/LoginContainer';
import { ForgotPswContainer } from './src/components/containers/ForgotPswContainer';
import { FirstScreen } from './src/components/screens/FirstScreen';
import { InstructionContainer } from './src/components/containers/InstructionContainer';
import { OnboardingOne } from './src/components/containers/OnboardingOne';

export default function App() {
  // const [wa, setWa] = useState("")
  // axios.get("http://localhost:8000/api/v1/test").then((response) => {
  //   setWa(response.data[0].name)
  // })

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        {/* <Text>{wa}</Text> */}
        {/* <SignUpContainer /> */}
        <LoginContainer />
        {/* <ForgotPswContainer /> */}
        {/* <FirstScreen /> */}
        {/* <InstructionContainer /> */}
        {/* <OnboardingOne /> */}
        <StatusBar style="auto" />
      </View>
    </NativeBaseProvider>
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
