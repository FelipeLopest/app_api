import { StyleSheet, View, Text, ScrollView} from "react-native";
import CardCep from "../components/CardCep";
import { useState } from "react";
import * as cep from '../services/cep'
import { InputCep } from "../components/Inputs";

export default function Tela_Cep(){
const[cidade,setCidade] = useState('');
const[bairro,setBairro] = useState('');
const[rua,setRua] = useState('');

const exibirCep = (digito) => {

    if(digito.length !== 8 ) {
        console.log('cep invalido');
       setCidade('');
       setBairro('');
       setRua('');
       return;
    };

cep.getCep(digito).then((resposta)=>{
    setCidade(resposta.city || '');
    setBairro(resposta.neighborhood || '');
    setRua(resposta.street || '');
    console.log(digito)
    console.log('deu certo')
}).catch((error) => {
        console.error('Error fetching DDD:', error);
        setCidade('');
        setBairro('');
        setRua('') 
      });
   
};
    return(

        <View>
            <InputCep
            onChangeText={(digito)=> { if (digito.length === 8){exibirCep(digito)} }}
            />
            {cidade !== '' && (<ScrollView style={{ width: '100%' }}>
        <CardCep cidade={cidade} bairro={bairro} rua={rua} />
      </ScrollView>)}
             
        </View>


    );
}






