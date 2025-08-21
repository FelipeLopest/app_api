import { useState } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import CardFeriado from "../components/CardFeriado";
import { InputFeriado } from "../components/Inputs";
import * as feriado from "../services/feriados";

export default function Tela_feriados() {
  const [feriados, setFeriados] = useState([]);

  const ExibirFeriados = (digito) => {
    if (!digito || digito.length !== 4) {
      console.log("ano invalido");
      return;
    }

    feriado.getFeriado(digito).then((resposta) => {
      setFeriados(resposta);
    });
  };

  return (
    <View style={styles.container}>
      <InputFeriado
        onChangeText={(ano) => {
          if (ano.length === 4) {
            ExibirFeriados(ano);
          }
        }}
      />

      {feriados.length > 0 && (
        <ScrollView style={styles.scroll}>
          {feriados.map((feriado, index) => (
            <CardFeriado
              key={index}
              nome={feriado.name}
              data={feriado.date}
            />
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
  scroll: {
    marginTop: 15,
    paddingBottom: 20,
  },
});
