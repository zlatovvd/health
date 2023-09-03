import { configureStore } from '@reduxjs/toolkit';
import { productsReducer } from './products/productsSlice';
import { intakeReducer } from './intake/intakeSlice';
import { diaryReducer } from './diary/diarySlice';
import { authReducer } from './auth/authSlice';
import { modalReducer } from './modal/modalSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistStore,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    intake: intakeReducer,
    diary: diaryReducer,
    auth: authReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
