import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import Home from './src/Home';
export default function App() {
  return (
    <SafeAreaView style={style.container}>
      <Home />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
    marginTop: 30,
    backgroundColor: "#13293d",
    flex: 1
  }
});