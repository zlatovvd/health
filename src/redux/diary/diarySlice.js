const { createSlice } = require('@reduxjs/toolkit');

const getToday = () => {
  const date = new Date();

  const year = date.getFullYear();

  const month = date.getMonth() < 10 ? `0${date.getMonth()+1}` : date.getMonth();
  const day = date.getDate();
  const today = `${year}-${month}-${day}`;

  return today;
};

const initDiaryState = {
  data: [],
  diaryDate: getToday(),
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
        state.data = state.data.filter(item => item.id !== payload);
      },
    },
    setDiaryDate: {
      reducer(state, {payload}) {
        state.diaryDate = payload;
      }
    }
  },
});


export const diaryReducer = diarySlice.reducer;

export const {addDiary, removeDiary} = diarySlice.actions;