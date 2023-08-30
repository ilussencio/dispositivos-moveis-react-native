import { View } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";
export default function Card({titulo}) {
   return (
    <View style={style.container}>
        <Text style={style.text}>{titulo}</Text>
    </View>
   );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: "#247ba0",
        marginTop: 10,
        padding: 10
    },
    text:{
        color: "#fff",
        fontSize: 16
    }
});

