import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/scrollSaveSchema';

const initialState: ScrollSaveSchema = {
  scroll: {},
};

const scrollSaveSlice = createSlice({
  name: 'scrollSaveSlice',
  initialState,
  reducers: {
    setScrollPosition: (state, action: PayloadAction<{ path: string, position: number }>) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const { actions: scrollSaveSliceActions } = scrollSaveSlice;
export const { reducer: scrollSaveSliceReducer } = scrollSaveSlice;
