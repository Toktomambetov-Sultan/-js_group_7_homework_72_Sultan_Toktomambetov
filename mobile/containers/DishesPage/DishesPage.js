import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { dishesInit } from "../../store/dishes/dishesActions";
import DishCard from "../../components/DishCard/DishCard";
import {
  addDishToCart,
  changeModalState,
  dishesInitInCart,
  deleteDishFromCart,
  orderPost,
} from "../../store/cart/cartActions";
import CartModal from "../../components/CartModal/CartModal";

const DishesPage = () => {
  const dishesState = useSelector((state) => state.dishes);
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const addDishToCartHandler = (dish) => dispatch(addDishToCart(dish));
  const dishesInitInCartHandler = () => dispatch(dishesInitInCart());
  const changeModalStateHandler = (bool) => dispatch(changeModalState(bool));
  const deleteDishFromCartHandler = (dish) =>
    dispatch(deleteDishFromCart(dish));
  const orderPostHandler = async () => {
    await dispatch(orderPost(cartState.dishesInCart));
    dishesInitInCartHandler();
    changeModalStateHandler(false);
  };

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
            <DishCard
              name={dish.name}
              onPress={() => addDishToCartHandler(dish)}
              price={dish.price}
              imgSrc={dish.imgSrc}
            />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <View style={styles.beforeBottom}>
        <Button title="reset" color="red" onPress={dishesInitInCartHandler} />
      </View>
      <View style={styles.bottom}>
        <Text style={styles.bottomText}>
          Total order: {cartState.totalPrice}
        </Text>
        <View style={styles.bottomButton}>
          <Button
            title="Checkout"
            onPress={() => changeModalStateHandler(true)}
          />
        </View>
      </View>
      <CartModal
        onClose={() => changeModalStateHandler(false)}
        deleteDish={deleteDishFromCartHandler}
        onContinue={orderPostHandler}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
  },
  beforeBottom: {
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  top: {
    flexGrow: 1,
  },
  bottom: {
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  bottomButton: {
    width: "50%",
  },
  bottomText: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 16,
  },
});

export default DishesPage;
