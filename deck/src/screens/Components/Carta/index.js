import { View, Text, Image } from "react-native";

export default function Carta({item}){
    console.log(item)

    return (
        
        <View>
            <Text>{item.code}</Text>
            <Image 
                source={require('{item.image}')}
            />
            <Text>{item.image}</Text>
            <Text>{item.value}</Text>
            <Text>{item.suit}</Text>
            <Text>Carta</Text>
        </View>
    );
}