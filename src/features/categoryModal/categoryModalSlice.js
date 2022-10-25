import { createSlice } from "@reduxjs/toolkit"

export const categoryModalSlice = createSlice({
    name: "categoryModal",
    initialState: {
        value: false,
        type: null,
        item: null,
        error: null,
    },
    reducers: {
        openModal: (state, action) => {
            state.value = true;
            state.type = action.payload.type;
            state.item = action.payload.item;
        },
        closeModal: state => {
            state.value = false;
            state.type = null;
            state.item = null;
            state.error = null;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }

    }
})
export const selectCategoryModal = state => state.categoryModal

export const { openModal, closeModal, setError } = categoryModalSlice.actions
export default categoryModalSlice.reducer

