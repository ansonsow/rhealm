import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import { useState } from 'react'
// import axios from 'axios';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import { SignUpContainer } from './src/components/containers/SignUpContainer';
import { LoginContainer } from './src/components/containers/LoginContainer';
import { ForgotPswContainer } from './src/components/containers/ForgotPswContainer';
import { WelcomeScreen } from './src/components/screens/WelcomeScreen';
import { InstructionContainer } from './src/components/containers/InstructionContainer';
import { OnboardingOne } from './src/components/containers/OnboardingOne';
import { AppStack } from './src/components/stacks/AppStack';
import { OnboardingTwo } from './src/components/containers/OnboardingTwo';
import { Heading } from './src/components/layout/Heading';
import { MainContainer } from './src/components/containers/MainContainer';
import { ProfileContainer } from './src/components/containers/ProfileContainer';

export default function App() {
  // const [wa, setWa] = useState("")
  // axios.get("http://localhost:8000/api/v1/test").then((response) => {
  //   setWa(response.data[0].name)
  // })

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <View style={styles.container}>
          {/* <Text>{wa}</Text> */}
          {/* <SignUpContainer /> */}
          {/* <LoginContainer /> */}
          {/* <ForgotPswContainer /> */}
          {/* <WelcomeScreen /> */}
          {/* <InstructionContainer /> */}
          {/* <OnboardingOne /> */}
          {/* <AppStack /> */}
          {/* <OnboardingTwo /> */}
          {/* <Heading /> */}
          {/* <MainContainer /> */}
          <ProfileContainer />
          <StatusBar style="auto" />
        </View>
      </NavigationContainer>
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
