import React from "react";
import { Button, FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const CartModal = ({ onClose, onContinue, deleteDish }) => {
  const cartState = useSelector((state) => state.cart);
  const dishesState = useSelector((state) => state.dishes);
  const dishesInCart = Object.keys(cartState.dishesInCart).map((key) => {
    const dish = dishesState.dishes.find((item) => item.id === key);
    return {
      id: key,
      count: cartState.dishesInCart[key],
      name: dish.name,
      price: dish.price,
    };
  });
  return (
    <View>
      <Modal animationType="slide" visible={cartState.isModalOpen}>
        <View style={styles.wrapper}>
          <View style={styles.top}>
            <View style={styles.infoBlock}>
              <Text style={styles.topText}>Delivery</Text>
              <Text>{cartState.delivery} KGS</Text>
            </View>
            <View style={styles.infoBlock}>
              <Text style={styles.topText}>Total</Text>
              <Text>{cartState.totalPrice} KGS</Text>
            </View>
            <FlatList
              data={dishesInCart}
              renderItem={({ item: dish }) => {
                return (
                  <View style={styles.infoItem}>
                    <Text>
                      {dish.name} (x{dish.count})
                    </Text>
                    <Text>{dish.count * +dish.price} KGS</Text>
                    <Button title="delete" onPress={() => deleteDish(dish)} />
                  </View>
                );
              }}
              keyExtractor={(item) => item.id}
            />
          </View>
          <View style={styles.bottom}>
            <View style={styles.bottomButton}>
              <Button title="cancel" onPress={onClose} />
            </View>
            <View style={styles.bottomButton}>
              <Button title="Order" onPress={onContinue} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
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
  infoBlock: {
    borderBottomWidth: 4,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  topText: {
    fontSize: 20,
  },
  infoItem: {
    flexDirection: "row",
    paddingHorizontal: 5,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    marginBottom: 10,
  },
});

export default CartModal;
