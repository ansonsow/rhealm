import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { SignUpContainer } from "../containers/SignUpContainer";
import { LoginContainer } from "../containers/LoginContainer";
import { ForgotPswContainer } from "../containers/ForgotPswContainer";
import { InstructionContainer } from "../containers/InstructionContainer";
import { OnboardingOne } from "../containers/OnboardingOne";
import { OnboardingTwo } from "../containers/OnboardingTwo";
import { MainContainer } from "../containers/MainContainer";
import { ProfileContainer } from "../containers/ProfileContainer";
import { ColourMatch } from "../containers/ColourMatch"

const Stack = createNativeStackNavigator();
// const Stack = createStackNavigator();

export const AppStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Login"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen
                    name="Index"
                    component={WelcomeScreen}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUpContainer}
                />
                <Stack.Screen
                    name="Login"
                    component={LoginContainer}
                />
                <Stack.Screen
                    name="ForgotPsw"
                    component={ForgotPswContainer}
                />
                <Stack.Screen
                    name="Instruction"
                    component={InstructionContainer}
                />
                <Stack.Screen
                    name="OnboardingOne"
                    component={OnboardingOne}
                />
                <Stack.Screen
                    name="OnboardingTwo"
                    component={OnboardingTwo}
                />
                <Stack.Screen
                    name="Main"
                    component={MainContainer}
                />
                <Stack.Screen
                    name="Profile"
                    component={ProfileContainer}
                />
                <Stack.Screen
                    name="ColourMatch"
                    component={ColourMatch}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}