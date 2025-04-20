import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        addContact: () => {},
        deleteContact: () => {},
    }
})
export const { addContacts, deleteContacts } = slice.actions;
export default slice.reducer;