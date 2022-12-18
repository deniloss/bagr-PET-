import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CommentFormSchema } from '../types/CommentFormSchema';

const initialState: CommentFormSchema = {
  text: '',
  isLoading: false,
  error: '',
};

const CommentFormSlice = createSlice({
  name: 'CommentFormSlice',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
});

export const { actions: CommentFormActions } = CommentFormSlice;
export const { reducer: CommentFormReducer } = CommentFormSlice;
