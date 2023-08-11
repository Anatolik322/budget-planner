import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    total: 0,
    save: 0,
    spend:0,
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
                return e = [e, 0]
            });
        },
        addSpend: (state, action) => {
            state.daysArr = state.daysArr.map((e, id) => {
                if( id == action.payload.index ){
                    return [e[0], e[1] += +action.payload.sum]
                }return e
            })
        },
        clearState: (state, action) => {
            state.daysArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map(e => {
                return e = [e, 0]
            });
        }
    },
})

export const {increment, setDays, addSpend, clearState} = amountSlice.actions
export default amountSlice.reducer

//[action.payload.index][1] = action.payload.sum