import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Animated } from "react-native";
import { Card } from 'react-native-shadow-cards';
import { SvgXml } from "react-native-svg";
import { heartIcon, flipArrowIcon } from "../../../../assets/images/svgs";

const ntc = require('@yatiac/name-that-color');
import COLOR_CONVERTER from "../../../../assets/colour-converter/colour-converter";

const SliderItem = ({ img, css, colors }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipAniFront = useRef(new Animated.Value(0)).current;
    const flipAniBack = useRef(new Animated.Value(180)).current;

    const startFlipAnimation = () => {
        Animated.parallel([
            Animated.timing(flipAniFront, {
                toValue: isFlipped ? 180 : 0,
                duration: css.cardFlipSpeed,
                useNativeDriver: true,
            }),

            Animated.timing(flipAniBack, {
                toValue: isFlipped ? 0 : 180,
                duration: css.cardFlipSpeed,
                useNativeDriver: true,
            }),
        ]).start();
    };

    useEffect(() => {
        startFlipAnimation();
    }, [isFlipped]);

    const styles = StyleSheet.create({

        cardWrap: {
            position: "relative",
            height: css.itemHeight,
            width: css.itemWidth,
            shadowOffset: {
                width: css.shadowOffsetX,
                height: css.shadowOffsetY
            },
            shadowRadius: css.shadowBlur,
            marginRight: css.itemsSpacing,
        },

        touchWrap: {
            position: "relative",
            flex: 1,
            borderRadius: css.itemRounding,
            overflow: "hidden",
        },

        cardFront: {
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: css.itemRounding,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            zIndex: isFlipped ? 2 : 1,
        },

        heartCont: {
            position: "absolute",
            top: 0,
            left: 0,
            marginTop: 8,
            marginLeft: 8,
            width: 30,
            height: 30,
            backgroundColor: "#ffffff",
            borderRadius: 30 / 2,
            alignItems: "center",
            justifyContent: "center",
            shadowColor: "#000000",
            shadowOffset: {
                width: 0,
                height: 10
            },
            shadowOpacity: 0.2,
            shadowRadius: 10,
            zIndex: 2
        },

        heartBub: {
        },

        imgs: {
            flex: 1,
        },

        flipCont: {
            position: "absolute",
            bottom: 0,
            right: 0,
            marginBottom: 8,
            marginRight: 8,
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2
        },

        flipBub: {
        },

        gradShad: {
            position: "absolute",
            bottom: 0,
            right: 0,
            marginBottom: -100,
            marginRight: -100,
            width: 100,
            height: 100,
            backgroundColor: "#ffffff",
            shadowColor: "#ffffff",
            shadowOffset: {
                width: -50,
                height: -50
            },
            shadowOpacity: 1,
            shadowRadius: 20,
        },

        cardBack: {
            position: "absolute",
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: css.itemRounding,
            overflow: "hidden",
            backfaceVisibility: "hidden",
            zIndex: isFlipped ? 1 : 2,
        },

        colorBlock: {
            flexDirection: "column",
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
        },

        colorText: {
            textShadowColor: "rgba(0,0,0,0.25)",
            textShadowOffset: {
                width: 1.5,
                height: 1.5
            },
            textShadowRadius: 2
        },

        textWhite: {
            color: "#efefef"
        },

        textBlack: {
            color: "black"
        }
    })



    const flipThis = () => {
        setIsFlipped(!isFlipped);
        // Alert.alert("hi")
    }



    return (
        <>
            <Card
                style={[styles.cardWrap]}
                elevation={css.shadowSize}
                cornerRadius={css.itemRounding}
                opacity={css.shadowStrength}
                backgroundColor="transparent" // this spits a warning but is what it is
            >
                <TouchableOpacity
                    style={[styles.touchWrap]}
                    activeOpacity={1}
                    onPress={flipThis}
                >
                    {/*---- CARD, FRONT ----*/}
                    <Animated.View
                        style={[styles.cardFront, {
                            transform: [{
                                rotateY: flipAniFront.interpolate({
                                    inputRange: [0, 180],
                                    outputRange: ["0deg", "180deg"]
                                })
                            }]
                        }]}
                    >
                        <View style={styles.heartCont}>
                            <SvgXml
                                xml={heartIcon}
                                style={styles.heartBub}
                                width="18"
                                height="18"
                            />
                        </View>

                        <Image source={{ uri: img }} style={styles.imgs} resizeMode="cover" />

                        <View style={styles.flipCont}>
                            <SvgXml
                                xml={flipArrowIcon}
                                style={styles.flipBub}
                                width="18"
                                height="18"
                            />
                        </View>

                        <View style={styles.gradShad}></View>
                    </Animated.View>

                    {/*---- CARD, BACK ----*/}
                    {/* <View style={[styles.cardBack]}> */}
                    <Animated.View
                        style={[styles.cardBack, {
                            transform: [{
                                rotateY: flipAniBack.interpolate({
                                    inputRange: [0, 180],
                                    outputRange: ["0deg", "180deg"]
                                })
                            }]
                        }]}
                    >
                        {
                            typeof (colors) !== "undefined" ||
                                colors && colors.trim?.() === "" &&
                                typeof (colors) == "array" ?
                                (
                                    colors.map((eachColor, colorIndex) => (
                                        <View
                                            key={colorIndex}
                                            style={[styles.colorBlock, { backgroundColor: eachColor }]}
                                        >
                                            <Text>{COLOR_CONVERTER.HEX_TO_RGB("#bdced0")}</Text>
                                            {/* <Text style={styles.colorText}>{ntc(eachColor).colorName}</Text> */}
                                            {
                                                COLOR_CONVERTER.GET_COLOR_LUM(eachColor, "hex", "name") == "dimmed" ||
                                                    COLOR_CONVERTER.GET_COLOR_LUM(eachColor, "hex", "name") == "very dark" ?
                                                    <Text style={[styles.colorText, styles.textWhite]}>{ntc(eachColor).colorName}</Text> :
                                                    <Text style={[styles.colorText, styles.textBlack]}>{ntc(eachColor).colorName}</Text>
                                            }
                                        </View>
                                    ))
                                ) : ("")
                        }
                    </Animated.View>
                </TouchableOpacity>
            </Card>
        </>
    )
}

export default SliderItem;