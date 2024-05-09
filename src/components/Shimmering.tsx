import React from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import ShimmerPlaceholder from 'react-native-shimmer-placeholder';
const data = Array.from({length: 5}, (_, i) => i + 1);

const ShimmeringConfig = ({withComments}) => {
  const renderItem = () => (
    <View style={styles.cardContainer}>
      <Image
        source={require('../assets/images/avatar.png')}
        style={styles.avatar}
      />
      <View style={styles.container}>
        <ShimmerPlaceholder style={styles.shimmerUserName} />
        <ShimmerPlaceholder style={styles.shimmerTitle} />
        <ShimmerPlaceholder style={styles.shimmerContent} />
      </View>
    </View>
  );
  const renderComment = () => (
    <View style={styles.cardContainer}>
      <Image
        source={require('../assets/images/avatar.png')}
        style={styles.avatar}
      />
      <View style={styles.container}>
        <ShimmerPlaceholder style={styles.shimmerUserName} />
        <ShimmerPlaceholder style={styles.shimmerContent} />
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={withComments ? renderComment : renderItem}
        keyExtractor={item => item.toString()}
        contentContainerStyle={{padding: 10}}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
    marginBottom: 70,
  },
  shimmerUserName: {
    width: 100,
    height: 20,
    borderRadius: 5,
    marginBottom: 5,
  },
  shimmerTitle: {
    width: '80%',
    height: 20,
    borderRadius: 5,
    marginBottom: 5,
  },
  shimmerContent: {
    width: '100%',
    height: 60,
    borderRadius: 5,
    marginBottom: 5,
  },
});

export default ShimmeringConfig;
