import { configureStore } from "@reduxjs/toolkit";
import { productsReducer } from "./products/productsSlice";
import { intakeReducer } from "./intake/intakeSlice";
import { diaryReducer } from "./diary/diarySlice";
import { authReducer } from "./auth/authSlice";
import { modalReducer } from "./modal/modalSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        intake: intakeReducer,
        diary: diaryReducer,
        auth: authReducer,
        modal: modalReducer,
    }
})