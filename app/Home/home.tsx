import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  Layout,
  Text,
  Button,
  IconRegistry,
  Icon,
  Card,
  Datepicker,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useNavigation } from '@react-navigation/native';
import { default as theme } from '../theme.json';
// Remove the import statement for `useRouter` as it is not needed with Expo and React Navigation
const deleteIcon = (props: any) => {
  return <Icon name="trash" {...props} />;
};

const Home: React.FC = () => {
  const [date, setDate] = useState<Date>(new Date());
    const navigation = useNavigation<any>();
  return (
    <Layout style={styles.container}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <Datepicker date={date} onSelect={(nextDate) => setDate(nextDate)} />
        <Text>APP</Text>
        <Button
          accessoryLeft={deleteIcon}
          onPress={() => console.log('Pressed')}
        >
          Press Me
        </Button>
        
        <Card status="success">
          <Text>HOMMEEE</Text>
        </Card>
        <Button onPress={() => navigation.navigate('login')} style={styles.button}>
          Ir a Inicio
        </Button>
      </ApplicationProvider>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
  },
});

export default Home;