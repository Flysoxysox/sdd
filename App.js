import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer,} from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import HomeScreen from './HomePage';
import NotificationsScreen from './NotificationsScreen';

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(130, 90, 229)',
    background: 'rgb(251, 251, 251)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  
  },
};

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Drawer.Navigator initialRouteName="Home">
        
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
} 


