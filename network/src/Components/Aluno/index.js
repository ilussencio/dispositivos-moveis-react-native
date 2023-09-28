import { Text, StyleSheet, View } from "react-native"

export default function Aluno({nome, nota}){
    return(
        <View style={styles.container}>
            <View style={styles.statusNome}>
                <View style={[styles.status,(nota < 6)?styles.statusVermelho:styles.statusAzul]}></View>
                <Text>{nome}</Text>
            </View>
    
            <Text>{nota}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    statusNome:{
        flexDirection: "row",
        alignItems: "center",
    },
    container:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 5,
    },
    status:{
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 20,
    },
    statusAzul:{
        backgroundColor: "blue",
    },
    statusVermelho:{
        backgroundColor: "red",
    }
});