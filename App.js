
import { NavigationContainer } from '@react-navigation/native';

import { View, StyleSheet } from 'react-native';

import {useRoute} from "./router"

console.log("Project loaded");





export default function App() {

  const routing = useRoute(true)
 
  return (
    <NavigationContainer>
      {routing}
      
    </NavigationContainer>
    
  );
}




