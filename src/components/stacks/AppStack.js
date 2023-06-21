import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WelcomeScreen } from "../screens/WelcomeScreen";
import { SignUpContainer } from "../containers/SignUpContainer";
import { LoginContainer } from "../containers/LoginContainer";
import { ForgotPswContainer } from "../containers/ForgotPswContainer";
import { InstructionContainer } from "../containers/InstructionContainer";
import { OnboardingOne } from "../containers/OnboardingOne";

const Stack = createNativeStackNavigator();

export const AppStack = () => {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name="Index"
                component={WelcomeScreen}
            />
            {/* <Stack.Screen
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
            /> */}


        </Stack.Navigator>
    </NavigationContainer>
}