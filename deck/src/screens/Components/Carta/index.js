import { View, Text, Image, Button } from "react-native";

export default function Carta({item}){
    console.log(item)

    return (
        
        <View>
            <Image
                source={{
                    uri: item.image,
                }}
                width={70}
                height={100}
            />
        </View>
    );
}