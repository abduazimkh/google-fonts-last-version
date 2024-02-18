import { configureStore } from "@reduxjs/toolkit";
import FontsData  from "../features/fonts-slice";
import FontData from "../features/font-slice";
import { CartReducer } from "../features/cart-slice";

export const store = configureStore({
    reducer: {
        fonts: FontsData,
        font: FontData,
        cartAll: CartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch