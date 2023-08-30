import { useEffect, useState } from 'react';
import { View, Text, FlatList, TextInput, StyleSheet, Button, Pressable } from 'react-native';
import Card from '../Components/Card';
import dataMocks from '../Mocks/dataMocks';

export default function Home() {
  const [lista, setLista] = useState([]);
  const [text, setText] = useState('');
 

  const renderItem = ({item}) => {
    return <Card titulo={item} />
  }
  const adicionar = () =>{
    if(text.trim() !== ''){
      setLista([...lista, text]);
      setText('');
    }

  }

  return (
      <View style={style.container}>
        <View style={style.inputContainer}>
          <TextInput 
            style={style.textInput}
            placeholder='Digite um produto'
            onChangeText={setText}
            value={text}
          />
          <Pressable 
            onPress={() => {
              adicionar();
            }}
            style={style.button}
           >
            <Text style={style.textButton}>Adicionar</Text>
          </Pressable>

        </View>
        
        {lista.length === 0?<Text style={style.listaVazia}>Inserir um elemento na lista</Text>:
        <FlatList 
          data={lista}
          renderItem={renderItem}
        />}
      </View>
      
  );
}

const style = StyleSheet.create({
  container:{
    padding: 20,
  },
  inputContainer:{
    display: 'flex',
    flexDirection: 'row',
  },
  textInput:{
    backgroundColor: '#E8F1F2',
    flex:3,
    fontSize: 18,
    paddingLeft: 10
  },
  button:{
    flex: 1,
    backgroundColor: '#1B98E0',
    padding: 5,
    marginLeft: 10,
    display: "flex",
    alignItems: "center",
    borderRadius: 5
  },
  textButton:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  listaVazia:{
    fontSize: 18,
    color: '#fff',
    marginTop: 10
  }
});