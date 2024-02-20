import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  cart: []
}

const AddToCartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addToCart: (state, action) => {
        let data: any = state.cart.findIndex((font: any) => font.family === action.payload.family)
        if(data === -1){
          state.cart = [...state.cart, action.payload]
        } 
      },
      remuveToCart: (state, action) => {
        let data: any = state.cart.findIndex((font: any) => font.family === action.payload.family)
        state.cart = state.cart.filter((_: any, index: any) => index !== data)
      },
      remuveAllToCart: (state) => {
        state.cart = []
      }
    }
});

export const { addToCart, remuveToCart, remuveAllToCart } = AddToCartSlice.actions;
export const CartReducer =  AddToCartSlice.reducer;