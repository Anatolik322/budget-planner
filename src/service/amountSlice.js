import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    value: 0,
}

export const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
    },
})

export const {increment} = amountSlice.actions
export default amountSlice.reducer