const { createSlice } = require('@reduxjs/toolkit');

const initIntake = {
  personInfo: null,
};

const intakeSlice = createSlice({
  name: 'intake',
  initialState: initIntake,
  reducers: {
    addPersonInfo: {
      reducer(state, {payload}) {
        state.personInfo = payload;
      }
    }

  },
});

export const intakeReducer = intakeSlice.reducer;
export const { addPersonInfo } = intakeSlice.actions;
