import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    persistStore, 
    persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import amountReducer from './amountSlice'

const persistConfig = {
    key: 'root',
    storage,
}
// const rootReducer = combineReducers({
//     amount: amountReducer,
// });

const persistedReducer = persistReducer(persistConfig, amountReducer);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})
export const persistor = persistStore(store);
export default store;