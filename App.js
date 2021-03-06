import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import ProfileScreen from './screens/Profile';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      
      <Stack.Navigator>
       
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'I AM Rich'}}
         
        />
        <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Back'}}
           
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}