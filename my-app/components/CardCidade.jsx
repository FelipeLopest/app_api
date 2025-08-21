import { StyleSheet, View, Text } from 'react-native';

const CardCidade = ({ nome, uf }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Cidade: {nome}</Text>
      <Text style={styles.subtitulo}>UF: {uf}</Text>
    </View>
  );
}

export default CardCidade;

const styles = StyleSheet.create({
  card: {
    width: '90%',
     backgroundColor: "#1E1E1E",
    padding: 20,
    marginVertical: 10,
    marginHorizontal: '5%',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#474747ff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
    color: '#0981f1ff',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 16,
    color: '#FFF',
  },
});