
import { useEffect, useState } from 'react';
import {FlatList, Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Aluno from '../../Components/Aluno';

export default function Home(){
    const [listAlunos, setListAlunos] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getAlunos();
    },[]);

    async function getAlunos(){
        const response = await fetch('https://6501a5d8736d26322f5c1121.mockapi.io/prova/notas')
        .then((response) => response.json())
        .then((json) => {
            setListAlunos(json);
        })
        .catch((error) => {
            console.error(error);
        })
        ;
    }
    
    async function addAluno(){
        const aluno = {
            name: name.trim(),
            email: email.trim()
        }

        if(aluno.nome == '' || aluno.nota == '')
            return;

        const response = await fetch('https://65148c8ddc3282a6a3cd489a.mockapi.io/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(aluno)
        }).then((response) => response.json())
        .then((json) => {
            getAlunos();
            setEmail('');
            setName('');
        })
    
    }
    return(
        <View>
            <Text style={styles.title}>Lista de alunos</Text>
            <FlatList
                style={styles.container}
                data={listAlunos}
                renderItem={({item}) => <Aluno nome={item.nome} nota={item.nota}/>}
                keyExtractor={item => item.id}
            />

            <Text style={styles.title}>Cadastro de aluno</Text>
            <View>
                <View>
                    <Text>Nome: </Text>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        keyboardType='default'
                        placeholder='Nome do aluno'
                        style={styles.input}
                    ></TextInput>
                </View>
                
                <View>
                    <Text>E-mail: </Text>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        keyboardType='email-address'
                        placeholder='E-mail do aluno'
                        style={styles.input}
                    ></TextInput>
                </View>
                

                <TouchableOpacity onPress={() => addAluno()} style={styles.submit}>
                    <Text style={styles.submitText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 2,
        marginVertical: 2,
        height: 300,
    },
    title:{
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginVertical: 10,
    },
    input:{
        borderColor: "#000",
        borderWidth: 1,
        padding: 10
    },
    submit:{
        backgroundColor: "#0c77e9",
        alignItems: "center",
        marginVertical: 10,
        paddingVertical: 10,
    },
    submitText:{
        color: "#fff",
        fontWeight: "bold",
        padding: 10
    }
});