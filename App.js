import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './app/screens/HomeScreen';
import FinancingApplication from './app/screens/FinancingApplication';
import GrantConfirmationScreen from './app/screens/GrantConfirmationScreen'; // Make sure the path is correct

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FinancingApplication" component={FinancingApplication} />
        <Stack.Screen name="GrantConfirmation" component={GrantConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
