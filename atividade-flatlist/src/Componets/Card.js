import { View, Text, Image, StyleSheet} from "react-native"

export default function Card({title, image}){
    return (
        <View style={styles.container}>
            <Image 
            source={image} 
            style={styles.image}
            resizeMode="center"
            />
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flexDirection: "column",
        flex: 1,
        backgroundColor: "#fff",
        margin: 5,
        padding: 5,
        alignItems: "center",
        justifyContent: "space-around",
        borderRadius: 20,
    },
    image:{
        margin: 20,
        width: 100,
        height: 150,
    },
    text:{
        color: "#808080",
        marginVertical: 20,
    }
})