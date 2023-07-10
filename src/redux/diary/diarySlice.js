const { createSlice } = require('@reduxjs/toolkit');

const initDiaryState = {
  data: [],
};

const diarySlice = createSlice({
  name: 'diary',
  initialState: initDiaryState,
  reducers: {
    addDiary: {
      reducer(state, { payload }) {
        state.data = [...state.data, payload];
      },
    },
    removeDiary: {
      reducer(state, { payload }) {
        state.date = state.data.filter(item => item.id !== payload.id);
      },
    },
  },
});


export const diaryReducer = diarySlice.reducer;

export const {addDiary, removeDiary} = diarySlice.actions;