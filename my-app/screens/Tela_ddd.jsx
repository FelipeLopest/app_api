import { StyleSheet, View, ScrollView } from 'react-native';
import { useState } from 'react'; // import useState para criar estado
import { InputDDD } from '../components/Inputs';
import CardCidade from '../components/CardCidade';
import * as ddd from '../services/ddd.js';

export default function Tela_ddd() {
  const [cidades, setCidades] = useState([]);
  const [uf, setUf] = useState(''); // estado para armazenar cidades




  const exibirCidadesDoDDD = (digito) => {
    if (!digito || digito.length !== 2) {
      setCidades([]);
      setUf(''); // limpa cidades se o input estiver inválido
      return;
    }

    ddd.getDDD(digito)
      .then((resposta) => {
        setCidades(resposta.cities || []);
        setUf(resposta.state || ''); // atualiza o estado com a lista de cidades retornada
      })
      .catch((error) => {
        console.error('Error fetching DDD:', error);
        setCidades([]);
        setUf(''); // em caso de erro, limpa as cidades
      });
  };

  return (
    <View style={styles.container}>
      <InputDDD
        onChangeText={(ddd) => exibirCidadesDoDDD(ddd.trim())}
      />

      {/* Use ScrollView para permitir rolar se tiver muitas cidades */}
      <ScrollView style={{ width: '100%' }}>
        {cidades.map((cidade, index) => (
          <CardCidade key={index} nome={cidade} uf={uf} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
