import {combineReducers} from '@reduxjs/toolkit';
import postsReducer from './PostsSlice';
import commentsReducer from './CommentsSlice';

const mainReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

export type MainReducer = ReturnType<typeof mainReducer>;
export default mainReducer;
