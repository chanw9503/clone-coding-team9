import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: [
    {
      img: '',
    },
  ],

  contents: [],

  mainUrl: '',

  result: [],
};

const boardSlice = createSlice({
  name: 'BOARD_SLICE',
  initialState,
  reducers: {
    addBoards: (state, action) => {
      state.boards = [...state.boards, action.payload];
    },
    initBoards: (state, action) => {
      state.boards = [action.payload];
    },

    addContents: (state, action) => {
      state.contents = action.payload;
    },

    initState: (state, action) => {
      state.boards = [
        {
          img: '',
        },
      ];
      state.contents = [];
    },

    addMainUrl: (state, action) => {
      state.mainUrl = action.payload;
    },

    addDetailBoard: (state, action) => {
      state.result = [...state.result, action.payload];
    },
  },
});

export const {
  addBoards,
  initBoards,
  addContents,
  initState,
  addMainUrl,
  addDetailBoard,
} = boardSlice.actions;
export default boardSlice.reducer;
