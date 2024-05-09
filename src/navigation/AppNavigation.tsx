import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, HomePage, PostDetailsPage} from '../screens';
export type StackParamList = {
  splashScreen: undefined;
  homePageScreen: undefined;
  postDetailsScreen: {
    postId: number;
    postTitle: string;
    postBody: string;
    userName: string;
  };
};
const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splashScreen">
        <Stack.Screen
          name="splashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="homePageScreen"
          component={HomePage}
          options={{
            headerTitle: 'Home Page',
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="postDetailsScreen"
          component={PostDetailsPage}
          options={{headerTitle: 'Post Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
const Stack = createNativeStackNavigator<StackParamList>();
