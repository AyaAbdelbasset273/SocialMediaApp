import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getPosts} from '../../services/getPosts';
export const fetchPosts = createAsyncThunk('fetchPosts', async () => {
  const posts = await getPosts();
  return posts;
});
export interface Post {
  id: number;
  user_id: number;
  title: string;
  body: string;
  userName: string;
}
type PostState = {
  posts: Post[];
  status: {
    isLoading: boolean;
    error: boolean;
  };
};
const initialState: PostState = {
  posts: [],
  status: {
    isLoading: false,
    error: false,
  },
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.status.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, state => {
        state.status.error = true;
      });
  },
});
export default postsSlice.reducer;
