import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    total: 0,
    save: 0,
    daysArr: [], 
}

export const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        setDays: (state, action) => {
            state.daysArr = action.payload.map(e => {
                return e = [e, null]
            });
        },
        addSpend: (state, action) => {
            state.daysArr = state.daysArr.map((e, id) => {
                if( id == action.payload.index ){
                    return [e[0], action.payload.sum]
                }return e
            })
        }
    },
})

export const {increment, setDays, addSpend} = amountSlice.actions
export default amountSlice.reducer

//[action.payload.index][1] = action.payload.sum