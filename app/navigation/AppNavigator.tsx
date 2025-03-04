import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Layout, Text, Icon, BottomNavigation, BottomNavigationTab, TopNavigation, TopNavigationAction, IconElement } from '@ui-kitten/components';
import { StyleSheet, View } from 'react-native';
import Home from '../Home/home';
import About from '../About';
import login from '../login/login';
import { Stack } from 'expo-router';
import Login from '../login/login';
const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props: any) => (
  <Icon {...props} name='person-outline' />
);

const BellIcon = (props: any) => (
  <Icon {...props} name='bell-outline' />
);

const BackIcon = (props: any): IconElement => (
  <Icon {...props} name='arrow-back' />
);

const BackAction = (): React.ReactElement => {
  const navigation = useNavigation();
  return (
    <View style={styles.backActionContainer}>
      <TopNavigationAction icon={BackIcon} onPress={() => navigation.goBack()} />
    </View>
  );
};

const BottomTabBar = ({ navigation, state }: { navigation: any, state: any }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <BottomNavigationTab title='HOME' icon={PersonIcon} />
    <BottomNavigationTab title='ABOUT' icon={BellIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name='Home' component={Home}  options={{ headerShown: false }}/>
    <Screen name='About' component={About}  options={{ headerShown: false }}/>
    <Screen name='login' component={Login}  options={{ headerShown: false }}/>
  </Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Layout style={{ flex: 1 }}>
      <TopNavigation
        accessoryLeft={BackAction}
      />
      <TabNavigator />
    </Layout>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backActionContainer: {
    marginTop: 20, // Ajusta este valor según sea necesario
  },
});

export default AppNavigator;