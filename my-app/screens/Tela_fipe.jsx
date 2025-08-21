import { StyleSheet, View, ScrollView, Button } from "react-native";
import CardFipe from "../components/CardFipe";
import { InputFipe } from "../components/Inputs";
import * as fipe from "../services/fipe";
import { useState } from "react";

export default function Tela_Fipe() {
  const [veiculos, setVeiculos] = useState([]);
  const [tipoVeiculo, setTipoVeiculo] = useState("");

  const ExibirFipe = (tipoDoVeiculo) => {
    if (!tipoDoVeiculo) {
      console.log("tipo nao encontrado");
      return;
    }

    fipe.getFipe(tipoDoVeiculo).then((resposta) => {
      setVeiculos(resposta);
      console.log(resposta);
    });
  };

  return (
    <View style={styles.container}>
      <InputFipe onChangeText={(text) => setTipoVeiculo(text.toLowerCase())} />

      <View style={styles.botao}>
        <Button style = {styles.botaocerto}
          title="Buscar"
          color="#0981f1ff"
          
          onPress={() => {
            if (tipoVeiculo === "carros" || tipoVeiculo === "motos") {
              ExibirFipe(tipoVeiculo);
            } else {
              console.log('Digite "carros" ou "motos"');
            }
          }}
        />
      </View>

      {veiculos.length > 0 && (
        <ScrollView style={styles.scroll}>
          {veiculos.map((veiculo, index) => (
            <CardFipe key={index} nome={veiculo.nome} valor={veiculo.valor} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  botao: {
    marginVertical: 15,
  },
  scroll: {
    marginTop: 10,
    paddingBottom: 20,
  },
  botaocerto: {
    borderRadius:10
  }
});
