import React from "react";
import {
    View,
    StyleSheet,
    Image,
    TouchableHighlight,
    Text,
} from "react-native";

const DishCard = (props) => {
    return (
        <TouchableHighlight
            activeOpacity={0.9}
            underlayColor="#DDDDDD"
            onPress={props.onPress}
        >
            <View style={styles.card}>
                <Image
                    style={styles.img}
                    source={{
                        uri: props.imgSrc,
                    }}
                />
                <Text style={styles.name}>{props.name}</Text>
                <Text>{props.price} KGS</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    card: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    name: {
        fontSize: 16,
    },
    img: {
        width: 100,
        height: 100,
    },
});

export default DishCard;
