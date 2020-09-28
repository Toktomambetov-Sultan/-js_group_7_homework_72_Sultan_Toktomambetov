import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dishesInit } from '../../store/dishes/dishesActions';
import DishCard from '../../components/DishCard/DishCard';
import { addDishToCart, dishesInitInCart } from '../../store/cart/cartActions';

const DishesPage = () => {
    const dishesState = useSelector(state => state.dishes);
    const cartState = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const addDishToCartHandler = (dish) => dispatch(addDishToCart(dish));
    const dishesInitInCartHandler = () => dispatch(dishesInitInCart());

    useEffect(() => {
        const dishesInitHandler = () => dispatch(dishesInit());
        dishesInitHandler();
    }, []);
    return (
        <View style={styles.wrapper}>
            <View style={styles.top}>
                <FlatList
                    data={dishesState.dishes}
                    renderItem={({ item: dish }) => (
                        <DishCard name={dish.name} onPress={() => addDishToCartHandler(dish)} price={dish.price} imgSrc={dish.imgSrc} />
                    )
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.beforeBottom}>
                <Button title="reset" color="red" onPress={dishesInitInCartHandler} />
            </View>
            <View style={styles.bottom}>
                <Text style={styles.bottomText}>Total order: {cartState.totalPrice}</Text>
                <View style={styles.bottomButton}>
                    <Button title="Checkout" />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
    },
    beforeBottom: {
        marginBottom: 10,
        paddingHorizontal: 5
    },
    top: {
        flexGrow: 1
    },
    bottom: {
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    bottomButton: {
        width: "50%"
    },
    bottomText: {
        width: "50%",
        justifyContent: "center",
        alignItems: "center",
        fontSize: 16
    }
});

export default DishesPage;
