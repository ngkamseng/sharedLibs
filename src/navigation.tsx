import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Landing from './screens/Landing';
import Step2 from './screens/Step2';

const Stack = createStackNavigator();

const App1_Navigation = () => {
  return (
        <Stack.Navigator>
          <Stack.Screen
            name="App1_Home"
            component={Landing}
          />

          <Stack.Screen
            name="App1_Step2"
            component={Step2}
          />
          
        </Stack.Navigator>
   
  );
};

export default App1_Navigation;
