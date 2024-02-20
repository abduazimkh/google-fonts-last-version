import FontsData  from "../features/fonts-slice";
import FontData from "../features/font-slice";
import { CartReducer } from "../features/cart-slice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ['omitedPart']
};  

const reducer = combineReducers({
    cart: CartReducer,
    fonts: FontsData,
    font: FontData,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
