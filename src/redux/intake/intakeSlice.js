const { createSlice } = require('@reduxjs/toolkit');

const initIntake = {
  eatenProduct: [
    {
      idProduct: '5d51694802b2373622ff553b',
      title: 'Яйцо куриное (желток сухой)',
      calories: 623,
    },
  ],
  dailyCalories: {}
};

const intakeSlice = createSlice({
  name: 'intake',
  initialState: initIntake,
  reducers: {
    addProduct: {
      reducer(state, { payload }) {
        state = [...state, payload];
      },
    },
    deleteProduct: {
      reducer(state, { payload }) {
        state = state.filter(product => product.id === payload.id);
      },
    },
    addDailyCalories: {
      reducer(state, {payload}) {
        console.log('slice', payload);
        state.dailyCalories = payload; 
      }
    }

  },
});

export const intakeReducer = intakeSlice.reducer;
export const { addProduct, addDailyCalories } = intakeSlice.actions;
