import { configureStore } from "@reduxjs/toolkit";
import FontsData  from "../features/fonts-slice";

export const store = configureStore({
    reducer: {
        fonts: FontsData,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch