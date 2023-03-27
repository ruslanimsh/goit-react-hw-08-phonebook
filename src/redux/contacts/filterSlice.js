import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;












// import { createSlice } from '@reduxjs/toolkit';

// export const filterSlice = createSlice({
//   name: 'filter',
//   initialState: {
//     value: '',
//   },
//   reducers: {
//     setFilter(state, action) {
//       state.value = action.payload;
//     },
//   },
// });

// export const { setFilter } = filterSlice.actions;
// export const getFilter = state => state.filter.value;
// export const filterReduser = filterSlice.reducer;
