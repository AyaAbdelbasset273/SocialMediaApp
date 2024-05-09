import {Post} from '../redux/slices/PostsSlice';

export const getPosts = async (): Promise<Post[]> => {
  const posts = await fetch('https://gorest.co.in/public/v2/posts');
  return posts.json();
};
