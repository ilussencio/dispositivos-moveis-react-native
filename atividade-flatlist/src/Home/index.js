import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
const carrinho = require('../imagens/icone-sacola.png');
import data from '../mocks/data';
import Card from '../Componets/Card';
export default function Home(){
    const renderItem = ({item}) => {
        return <Card title={item.title} image={item.image} />
    }
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.tituloText}> Lighteria</Text>
                <View style={styles.tituloImageContainer}>
                <Image source={carrinho} style={styles.tituloImage} />
                </View>
                
            </View>

            <View style={styles.categorias}>
                <View style={styles.line}></View>
                <Text style={styles.categoriasText}> Categorias </Text>
                <View style={styles.line}></View>
            </View>
                

            <FlatList 
                style={styles.flatlist}
                data={data}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    categorias:{
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 20,
    },
    flatlist:{
        height: "80%",
    },
    line:{
        borderWidth: 1,
        borderColor: "#808080",
        flex: 1,
    },
    categoriasText:{
        fontSize: 20,
        color: "#808080",
    },
    container:{
        margin: 20,
    },
    titulo:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    tituloText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "#808080",
    },
    tituloImageContainer:{
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        width: 70,
        height: 70,
        backgroundColor: "#fff",
    },
    tituloImage:{
        width: 35,
        height: 35,
    },
   
})