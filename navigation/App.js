import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoader] = useFonts({"Heydex": require("./assets/fonts/heydex/Heydex.ttf")});
  if(!fontsLoader) return null;

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 50, fontFamily: "Heydex"}}>NAVIGATION!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
