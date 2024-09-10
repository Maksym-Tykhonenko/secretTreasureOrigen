import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './navigation/Root';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;

{
  /**
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>xxxxxx</Text>
        </View>
   
  */
}
