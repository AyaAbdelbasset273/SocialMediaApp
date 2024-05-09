import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
const PostCard = ({post, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.userSection}>
        <Image
          source={require('../assets/images/userIcon.png')}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.userName}>
            {post.userName}
            {post.useName}
          </Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.body}>{post.body}</Text>
        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={onPress}>
            <Text style={styles.comment}>Comments</Text>
            <Image
              source={require('../assets/images/comment.png')}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  comment: {
    fontWeight: 'bold',
    marginRight: 10,
  },
  userSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 40,
  },
  body: {
    fontSize: 14,
    marginBottom: 10,
    marginLeft: 40,
  },
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PostCard;
