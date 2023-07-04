import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, Animated } from "react-native";
import { Card } from 'react-native-shadow-cards';

const ntc = require('@yatiac/name-that-color');

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
    
        imgs: {
            flex: 1,
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
                    activeOpacity="1"
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
                            <Image source={{ uri: img }} style={styles.imgs} resizeMode="cover"/>
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
                                typeof(colors) !== "undefined" ||
                                colors && colors.trim?.() === "" &&
                                typeof(colors) == "array" ?
                                (
                                    colors.map((eachColor, colorIndex) => (
                                        <View
                                            key={colorIndex}
                                            style={[styles.colorBlock, { backgroundColor: eachColor }]}
                                        >
                                            <Text style={styles.colorText}>{ntc(eachColor).colorName}</Text>
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