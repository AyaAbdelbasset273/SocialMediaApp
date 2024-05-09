import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {StackParamList} from '../navigation/AppNavigation';

const SplashScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('homePageScreen');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/splash_logo.png')}
        style={styles.logo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0000ff',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
});

export default SplashScreen;
