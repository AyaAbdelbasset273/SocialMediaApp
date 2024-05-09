import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RouteProp, useRoute} from '@react-navigation/native';
import {StackParamList} from '../navigation/AppNavigation';
import ShimmeringConfig from '../components/Shimmering';
import {MainReducer} from '../redux/slices/MainReducer';
import {fetchComments} from '../redux/slices/CommentsSlice';
const PostDetailsPage = () => {
  const {
    params: {postId, postTitle, postBody, userName},
  } = useRoute<RouteProp<StackParamList, 'postDetailsScreen'>>();
  const dispatch = useDispatch();
  const {comments, status} = useSelector(
    (state: MainReducer) => state.comments,
  ) as any;
  const userImage = require('../assets/images/userIcon.png');

  useEffect(() => {
    dispatch<any>(fetchComments(postId));
  }, [dispatch, postId]);
  return (
    <View style={styles.container}>
      <View style={styles.userInfoContainer}>
        <Image source={userImage} style={styles.avatar} />
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Text style={styles.title}>{postTitle}</Text>
      <Text style={styles.body}>{postBody}</Text>
      {comments.length > 0 && (
        <Text style={styles.commentsTitle}>Comments</Text>
      )}
      {status.isLoading ? (
        <ShimmeringConfig withComments={true} />
      ) : (
        <FlatList
          data={comments}
          renderItem={({item}) => (
            <View style={styles.commentContainer}>
              <Image source={userImage} style={styles.commentAvatar} />
              <View style={styles.commentContent}>
                <Text style={styles.commentName}>{item.name}</Text>
                <Text style={styles.commentBody}>{item.body}</Text>
              </View>
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          style={styles.commentsList}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 15,
  },
  userInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  body: {
    fontSize: 18,
    marginBottom: 20,
    color: '#666',
  },
  commentsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  commentContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  commentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  commentContent: {
    flex: 1,
  },
  commentName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  commentBody: {
    fontSize: 16,
    color: '#666',
  },
  commentsList: {
    flexGrow: 0,
  },
});

export default PostDetailsPage;
