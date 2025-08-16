import { StyleSheet,View,ScrollView,Button } from "react-native";
import CardFipe from "../components/CardFipe";
import { InputFipe } from "../components/Inputs";
import * as fipe from '../services/fipe'
import { useState } from "react";

export default function Tela_Fipe(){
    const[veiculos,setVeiculos] = useState([])
     const [tipoVeiculo, setTipoVeiculo] = useState('');

    const ExibirFipe = (tipoDoVeiculo) => {
        if(!tipoDoVeiculo){
            console.log('tipo nao encontrado')
        }

        fipe.getFipe(tipoDoVeiculo).then((resposta)=>{
            setVeiculos(resposta)
            console.log(resposta)
        })
    };

    return(
        <View>
           <InputFipe onChangeText={(text)=> setTipoVeiculo(text.toLowerCase())}/>

            <Button
        title="Buscar"
        onPress={() => {
          if (tipoVeiculo === 'carros' || tipoVeiculo === 'motos') {
            ExibirFipe(tipoVeiculo);
          } else {
            console.log('Digite "carros" ou "motos"');
          }
        }}
      />

           {veiculos.length > 0 && <ScrollView>
            
            {veiculos.map((veiculo,index)=>(<CardFipe  key={index} nome={veiculo.nome} valor={veiculo.valor}/>))}
            
            </ScrollView>}
        </View>
    )
}