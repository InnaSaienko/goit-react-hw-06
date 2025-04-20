import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "",
};

const slice = createSlice({
    name: "filters",
    initialState,
    reducer: {
        changeFilter: (state, action) => {
           state.name = action;
        }
    }
})

export const { changeFilter } = slice.actions;
export default slice.reducer;