import LogIn from './Screens/LoginScreen';
import SignUp from './Screens/RegistrationScreen';
import { View, StyleSheet } from 'react-native';

export default function App() {

 
  return (
    <View style={styles.container}>
      {/* <LogIn/> */}
      <SignUp/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});