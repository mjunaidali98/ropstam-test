import { createSlice } from "@reduxjs/toolkit";

export const tabSlice = createSlice({
    name: "tab",
    initialState: {
        tabNumber: 0,
    },
    reducers: {
        setTab: (state, action) => {
            state.tabNumber = action.payload;
        },
    }
})

export const selectTabSlice = state => state.tab

export const { setTab } = tabSlice.actions
export default tabSlice.reducer