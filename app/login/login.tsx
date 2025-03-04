import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import {
  ApplicationProvider,
  Layout,
  IconRegistry,
  Icon,InputProps,
    Input,
} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { useNavigation } from '@react-navigation/native';
import { default as theme } from '../theme.json';
// Remove the import statement for `useRouter` as it is not needed with Expo and React Navigation
const deleteIcon = (props: any) => {
  return <Icon name="trash" {...props} />;
};


const useInputState = (initialValue = ''): InputProps => {
    const [value, setValue] = React.useState(initialValue);
    return { value, onChangeText: setValue };
  };

const Login: React.FC = () =>{
    const NombreInput = useInputState();
    const ContraInput = useInputState();
    
    const navigation = useNavigation<any>();
    return (
    <Layout style={styles.container}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
        <Input
          placeholder='Nombre'
          status='nombre'
          {...NombreInput}
        />
        <Input
          placeholder='Contraseña'
          status='Contra'
          {...ContraInput}
        />
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
  export default Login ;
