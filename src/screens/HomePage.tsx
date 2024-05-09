import React, {useEffect} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchPosts} from '../redux/slices/PostsSlice';
import ShimmeringConfig from '../components/Shimmering';

import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../navigation/AppNavigation';
import PostCard from '../components/PostCard';
import {MainReducer} from '../redux/slices/MainReducer';
const HomePage = () => {
  const dispatch = useDispatch();
  const {posts, status} = useSelector(
    (state: MainReducer) => state.posts,
  ) as any;
  let userId = 273;
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  useEffect(() => {
    dispatch<any>(fetchPosts());
  }, [dispatch]);
  if (status.isLoading) {
    return <ShimmeringConfig withComments={false}></ShimmeringConfig>;
  }
  const handleCommentPress = (
    postId: number,
    postTitle: string,
    postBody: string,
    userName: string,
  ) => {
    navigation.navigate('postDetailsScreen', {
      postId,
      postTitle,
      postBody,
      userName,
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <PostCard
            post={{...item, userName: `User_${userId++}`}}
            onPress={() =>
              handleCommentPress(
                item.id,
                item.title,
                item.body,
                `User_${userId++}`,
              )
            }
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomePage;
