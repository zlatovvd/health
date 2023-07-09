import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import { filterReducer } from "./products/filterSlice";
import { intakeReducer } from "./products/intakeSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        filter: filterReducer,
        intake: intakeReducer,
    }
})