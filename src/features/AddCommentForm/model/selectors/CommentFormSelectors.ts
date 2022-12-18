import { StateSchema } from 'app/providers/StoreProvider';

export const getCommentFormIsLoading = (state: StateSchema) => state.CommentForm.isLoading;
export const getCommentFormError = (state: StateSchema) => state.CommentForm.error;
export const getCommentFormText = (state: StateSchema) => state.CommentForm.text;
