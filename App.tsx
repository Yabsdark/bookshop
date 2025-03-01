import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

const HomeScreen: React.FC = () => (
  <Layout style={styles.container}>
    <Text category='h1'>HOME</Text>
  </Layout>
);

const App: React.FC = () => (
  <ApplicationProvider {...eva} theme={eva.light}>
    <View style={styles.container}>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  </ApplicationProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;