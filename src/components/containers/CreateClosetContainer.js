import { Button, View } from 'native-base';
import { CreateClosetForm } from '../forms/CreateClosetForm';
import { useNavigation } from "@react-navigation/native";

export const CreateClosetContainer = () => {
    const navigation = useNavigation();

    const goToClosetMain = () => {
        navigation.navigate("ClosetScreen");
    }
    return (
        <View>
            <CreateClosetForm />
            <Button title="camera" onPress={goToClosetMain}>Cancel</Button>
        </View>
    )
};