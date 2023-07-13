import { extendTheme } from "native-base";

export const theme = extendTheme({
    components: {
        Center: {
            baseStyle: {
                backgroundColor: "#fff",
                height: "100%",
                width: "100%"
            }
        },
        Container: {
            baseStyle: {
                backgroundColor: "#fff",
                // width: "100%"
                // height: "100%"
            }
        },
        // View: {
        //     baseStyle: {
        //         flex: 1,
        //         backgroundColor: "#fff",
        //         height: "100%",
        //         width: "100%",
        //     }
        // },
        Text: {
            baseStyle: {
                color: "#303030",
                fontFamily: "SF Pro Display Regular",
                fontSize: 14
            }
        },
        Input: {
            baseStyle: {
                width: "100%",
                px: 5,
                py: 3,
                marginBottom: 5,
                autoCapitalize: "none",
                backgroundColor: "#F3F5F9",
                borderRadius: 15,
            }
        },
        Button: {
            baseStyle: {
                marginTop: 10,
                width: 250,
                borderRadius: 15,
            }
        },
        Pressable: {
            baseStyle: {
                marginTop: 10,
                padding: 3,
                width: 250,
                borderRadius: 15,
                backgroundColor: "#411E94",
                color: "#fff",
                alignSelf: "center"
            }
        },
        VStack: {
            baseStyle: {
                width: "100%"
            }
        },
        HStack: {
            baseStyle: {
                width: "100%"
            }
        },
        Select: {
            baseStyle: {
                backgroundColor: "#fff"
            }
        }
    },
})