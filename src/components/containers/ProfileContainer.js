import { Container } from "native-base";
import { Profile } from "../layout/Profile";
import { useNavigation } from "@react-navigation/native";

export const ProfileContainer = () => {

    const navigation = useNavigation();

    // const { closeMenu } = props;

    const openEdit = () => {
        console.log("Go to Edit Page");
        navigation.navigate("");
    }

    return (
        <Container>
            <Profile
                // backToMenu={backToMenu}
                openEdit={openEdit}
            />
        </Container>
    )
}