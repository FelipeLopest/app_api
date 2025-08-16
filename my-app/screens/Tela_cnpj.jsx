import { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import CardCnpj from "../components/CardCnpj";
import * as cpnj from '../services/cnpj'
import { InputCNPJ } from "../components/Inputs";


export default function Tela_cnpj(){
    const[cnpj,setCnpj] = useState('')
    const[razaoSocial,setRazaoSocial] = useState('')
    const[nomeFantasma, setNomeFantasma] = useState('')
    const[cep,setCep] = useState('')
    const[telefone,setTelefone] = useState('')

    const ExibirCnpj = (digito) => {
        if(!digito || digito.length !== 14 ) {
            console.log('algo deu errado');
            setCnpj('');
            setRazaoSocial('');
            setNomeFantasma('');
            setCep('');
            setTelefone('');
            return ;
        };

        cpnj.getCnpj(digito).then((resposta) => {
            setCnpj(resposta.cnpj);
            setRazaoSocial(resposta.razao_social);
            setNomeFantasma(resposta.nome_fantasia);
            setCep(resposta.cep);
            setTelefone(resposta.ddd_telefone_1);
               console.log(resposta)
        }).catch((error) => {
        console.error('Error fetching DDD:', error);
      
      });

     
        
    }
      

    return(
   
        <View>
          <InputCNPJ
          onChangeText={(digito)=> {
            if(digito.length === 14){
                ExibirCnpj(digito)
            }
          }}/>
          
          {cnpj !== '' && ( <CardCnpj cnpj = {cnpj} razaoSocial={razaoSocial} nomeFantasma={nomeFantasma} cep={cep} telefone={telefone}/>)}
           
          
            
        </View>

    )

}


