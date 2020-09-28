import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import DishesPage from './containers/DishesPage/DishesPage';
import cartReducer from './store/cart/cartReducer';
import dishesReducer from './store/dishes/dishesReducer';

const reducer = combineReducers({
  dishes: dishesReducer,
  cart: cartReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default function App() {
  return (
    <View style={styles.mainWrapper}>
      <Provider store={store} >
        <DishesPage />
      </Provider>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    paddingTop: 25,
    height: "100%",
  }
});
