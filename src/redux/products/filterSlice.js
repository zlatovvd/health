const { createSlice } = require("@reduxjs/toolkit");

const filterInitState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitState,
    reducers: {
        setFilterAcion : {
            reducer(state, {payload}) {
                state = payload;
            }
        }
    }
})

export const filterReducer = filterSlice.reducer;

export const {setFilterAcion} = filterSlice.actions;