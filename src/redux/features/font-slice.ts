import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instsnce from "../../api";
import { AxiosResponse } from "axios";

const API_KEY: string = "AIzaSyBMMUn07zAhSSJW_437OhdXfSBfbd_2Fco";
sessionStorage.setItem("api_key", API_KEY)

const initialState = {
    font_data: [],
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: "",
}

const getFont = createAsyncThunk("font", async (value: any, {rejectWithValue} : {rejectWithValue: any}) => {
    try {
        const response: AxiosResponse = await instsnce.get(`/webfonts?key=${API_KEY}&family=${value && value}`)
        return response.data.items
    }
    catch (error: any) {
        console.log(error);
        return rejectWithValue(error.response.data)      
    }

})


const fontSlice = createSlice({
    name: "font",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getFont.pending, (state, _) => {
            state.isLoading = true
        }),
        builder.addCase(getFont.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.font_data = action.payload
            state.message = "Successfully added"
        }),
        builder.addCase(getFont.rejected, (state, _) => {
            state.isError = true,
            state.isSuccess = false,
            state.message = "Something went wrong!"
        })
    }
})

export { getFont };
export default fontSlice.reducer;