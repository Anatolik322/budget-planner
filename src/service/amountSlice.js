import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    total: 0,
    save: 0,
    spend:0,
    daysArr: [],
    categories: [
        ["category", "sum"],
        ["Food", 0],
        ["Health", 0],
        ["Shelter", 0],
        ["Bills", 0],
        ["Transport", 0],
        ["Saving", 0],
        ["Other", 0],
    ] 
}

export const amountSlice = createSlice({
    name: 'amount',
    initialState,
    reducers: {
        spendIncrement: (state, action) => {
            state.spend += action.payload
        },
        setTotal: (state, action) => {
            state.total += action.payload
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

            state.categories = [
                ["category", "sum"],
                ["Food", 0],
                ["Health", 0],
                ["Shelter", 0],
                ["Bills", 0],
                ["Transport", 0],
                ["Saving", 0],
                ["Other", 0],
            ]
            state.total = 0
            state.daysArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31].map(e => {
                return e = [e, 0]
            });
        },
        addSpendByCategory: (state, action) => {
            state.categories = state.categories.map(e => {
                if(e[0] == action.payload[0]){
                    return [e[0], e[1] += action.payload[1]]
                }return e;
            })
        }
    },
})

export const {spendIncrement, setDays, addSpend, clearState, addSpendByCategory, setTotal} = amountSlice.actions
export default amountSlice.reducer
