import { Text, Button, TouchableOpacity, FlatList } from "react-native";
import Carta from "../Components/Carta";
import { useEffect, useState } from "react";

export default function Home(){
    const [deckId, setDeckId] = useState("");
    const [table, setTable] = useState([]);
    const [remaining, setRemaining] = useState(0);
    const [sum, setSum] = useState(0);
    useEffect(() => {
        getDeck();
    },[]);

    async function getDeck() {
        
        fetch("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        .then(res => res.json())
        .then(res => {setDeckId(res.deck_id)})
    }
    async function buyCards(){
        fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
        .then(res => res.json())
        .then(res => {
            setTable([... table, res.cards[0]])
            setRemaining(res.remaining)
            setSum(parseInt(sum) + parseInt(res.cards[0].value))
        })
    }
    function render(item){
        retunr (
            <Card item={item}/>
        )
    }
    return(
        <>
            <Text> DeckID = {deckId}</Text>
            <Text> Quantidade de cartas = {remaining}</Text>
            <Text> Soma = {sum}</Text>
            <TouchableOpacity onPress={() => buyCards()}>
                <Text>Comprar cartas</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => console.log(table)}>
                <Text>Console</Text>
            </TouchableOpacity>

            <FlatList
                data={table}
                renderItem={({item}) => {
                    return <Carta item={item} />
                }}

            />
        </>
        
    )
}