import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { dishesInit } from '../../store/dishes/dishesActions';
import DishCard from '../../components/DishCard/DishCard';

const DishesPage = () => {
    const dishesState = useSelector(state => state.dishes);
    const dispatch = useDispatch();
    useEffect(() => {
        const dishesInitHandler = () => dispatch(dishesInit());
        dishesInitHandler();
    }, []);
    return (
        <View>
            <View>
                <FlatList
                    data={dishesState.dishes}
                    renderItem={({ item: dish }) => (
                        <DishCard name={dish.name} price={dish.price} imgSrc={dish.imgSrc} />
                    )
                    }
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.bottom}>
                <Button title="i" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    bottom: {
        marginTop: "auto"
    }
});

export default DishesPage;
