import { createSlice } from '@reduxjs/toolkit';

export const librarySlice = createSlice({
    name: 'library',
    initialState: {
          books: {}
      },
     reducers: {
        getBooks: (state, {payload} ) => {
            state.books = payload
        },
     }
    });


// Action creators are generated for each case reducer function
export const { getBooks } = librarySlice.actions;