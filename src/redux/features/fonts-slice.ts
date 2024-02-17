import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fontsLoader } from "../../helpers/hooks/fontsLoader";
import { InitialStateType } from "../../types";
import instsnce from "../../api/index";
import { AxiosResponse } from "axios";

const API_KEY: string = "AIzaSyBMMUn07zAhSSJW_437OhdXfSBfbd_2Fco";
sessionStorage.setItem("api_key", API_KEY)

const initialState: InitialStateType = {
    fonts_data: [],
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: null,
    input_value: "",
    search_select: "",
    single_font: ""
}

const getFonts = createAsyncThunk("fonts", async (value: any, {rejectWithValue} : {rejectWithValue: any}) => {
    try {
        const response: AxiosResponse = await instsnce.get(`/webfonts?key=${API_KEY}${value.search_select ? "&sort="+value.search_select : ""}${window.location.pathname != "/" && value.single_font ? "&family="+value.single_font : ""}`)
        response.data.items.map((font:any)=>{fontsLoader(font.family)})
        return response.data.items
    }
    catch (error: any) {
        console.log(error);
        return rejectWithValue(error.response.data)      
    }

})


const fontsSlice = createSlice({
    name: "fonts",
    initialState,
    reducers: {
        inputValue: (state, action) => {
            localStorage.setItem("search", action.payload);
            state.input_value = localStorage.getItem("search") as string;
        },
        searchSelect: (state, action) => {
            localStorage.setItem("search-select", action.payload);
            state.search_select = localStorage.getItem("search-select") as string;
        },
        singleFont: (state, action) => {
            localStorage.setItem("single-font", action.payload);
            state.single_font = localStorage.getItem("single-font") as string;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getFonts.pending, (state, _) => {
            state.isLoading = true
        }),
        builder.addCase(getFonts.fulfilled, (state, action) => {
            state.isLoading = false,
            state.isSuccess = true,
            state.isError = false,
            state.fonts_data = action.payload,
            state.message = "Successfully added"
        }),
        builder.addCase(getFonts.rejected, (state, _) => {
            state.isError = true,
            state.isSuccess = false,
            state.message = "Something went wrong!"
        })
    }
})

export const { inputValue, searchSelect, singleFont } = fontsSlice.actions;
export { getFonts };
export default fontsSlice.reducer;