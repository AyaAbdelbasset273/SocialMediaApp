import {Comment} from '../redux/slices/CommentsSlice';
export const getComments = async (postId: number): Promise<Comment[]> => {
  const comments = await fetch(
    `https://gorest.co.in/public/v2/posts/${postId}/comments`,
  );
  return comments.json();
};
