import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{backgroundColor: 'black', color: 'white', fontSize: 60}}>Peaceful Space</Text>
      <Text style={{backgroundColor: 'black', color: 'white', fontSize: 40}}>Take a break to breathe and relax</Text>
      <Text style={{color: 'white', fontSize: 26}}>...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
