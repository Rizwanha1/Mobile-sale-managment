import { configureStore } from "@reduxjs/toolkit";
import { DataSetReducer } from "../reducers/Reducers";


const store = configureStore({
    reducer: {
        DATA_SET_REDUCER: DataSetReducer,
    },
});

export default store;