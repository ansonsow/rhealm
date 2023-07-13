import React from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions, StyleSheet, View, Text } from "react-native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

import SliderLogic from "./SliderLogic";
import SliderItem from "./SliderItem";
import SliderData from "./SliderData";

const { width } = Dimensions.get("window");

const css = {
    vPadding: 45,
    sidePadding: 15,

    // gallery item settings
    itemsSpacing: 15,
    itemRatio: 0.815602837,
    itemRounding: 15,

    // shadow settings
    shadowOffsetX: 8,
    shadowOffsetY: 8,
    shadowSize: 10, // aka "spread"
    shadowBlur: 15, // aka "blur"
    shadowStrength: 0.4,

    cardFlipSpeed: 699,
}

// css.itemWidth = (width - (css.itemsSpacing * (3 - 1))) / 3;
css.itemWidth = (width - (css.itemsSpacing * (3 - 1)) - (css.sidePadding * 2)) / 3;
css.itemHeight = css.itemWidth / css.itemRatio;
css.shadowPseudoPaddingTop = css.shadowBlur;
css.shadowPseudoPaddingBot = ((css.shadowSize + css.shadowBlur) / 2) * 2; // alt: (shadowSize + shadowBlur) * 2
css.shadowPseudoPaddingLeft = css.shadowBlur;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 2.1,
    },

    sliderBG: {
        height: css.itemHeight + css.vPadding + css.vPadding,
        backgroundColor: "white"
    },

    sliderInner: {
        width: width,
        justifyContent: "center", // vertical center,
        // next line is horizontal center
        // alignItems: "center"
        marginLeft: css.sidePadding,
        marginRight: -css.sidePadding
    },

    rowWrap: {
        flexDirection: "row",
        // marginLeft: css.itemsSpacing
    },
    heading: {
        fontWeight: "bold",
        fontSize: 20,
        color: "#000"
    },
});


const groupBy = 3;

let moduloSort = [];

// sort items into threes
for (let i = 0; i < SliderData.length; i += groupBy) {
    const group = SliderData.slice(i, i + groupBy);
    moduloSort.push(group);
}

const TrendingSlider = () => (
    <SafeAreaView>
        <View style={styles.container}>
            <Text style={styles.heading}>
                Trending Now!
            </Text>
            <View style={styles.sliderBG}>
                <SwiperFlatList
                    data={SliderLogic}
                    renderItem={({ sld, index }) => (
                        <View key={index} style={styles.sliderInner}>
                            {/* loop through main array */}
                            {/* this array has nested arrays inside it */}
                            {moduloSort.map((group, groupIndex) => (
                                <View key={groupIndex} style={styles.rowWrap}>
                                    {groupIndex === index ? group.map((item, itemIndex) => (
                                        <SliderItem
                                            key={itemIndex}
                                            img={item.image ? item.image : undefined}
                                            colors={item.colors ? item.colors : undefined}
                                            css={css}
                                        />
                                    )) : ""}
                                </View>
                            ))}
                        </View>
                    )}
                />
            </View>
        </View>
    </SafeAreaView >
);

export default TrendingSlider;