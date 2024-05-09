import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getComments} from '../../services/getComments';
export const fetchComments = createAsyncThunk(
  'fetchComments',
  async (postId: number) => {
    const comments = await getComments(postId);
    return comments;
  },
);
export type Comment = {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
};
type CommentState = {
  comments: Comment[];
  status: {
    isLoading: boolean;
    error: boolean;
  };
};
const initialState: CommentState = {
  comments: [],
  status: {
    isLoading: false,
    error: false,
  },
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchComments.pending, state => {
        state.status.isLoading = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status.isLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchComments.rejected, state => {
        state.status.error = true;
      });
  },
});
export default commentsSlice.reducer;
