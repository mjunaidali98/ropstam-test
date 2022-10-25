import { createSlice } from "@reduxjs/toolkit"

export const carModalSlice = createSlice({
    name: "carModal",
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
export const selectCarModal = state => state.carModal

export const { openModal, closeModal, setError } = carModalSlice.actions
export default carModalSlice.reducer

