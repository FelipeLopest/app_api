import { StyleSheet, View, Text } from "react-native";

const CardCep = ({ cidade, bairro, rua }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>Cidade: {cidade}</Text>
      <View style={styles.linha} />
      <Text style={styles.info}><Text style={styles.label}>Bairro:</Text> {bairro}</Text>
      <Text style={styles.info}><Text style={styles.label}>Rua:</Text> {rua}</Text>
    </View>
  );
};

export default CardCep;

const styles = StyleSheet.create({
  card: {
    width: '90%',
    backgroundColor: '#1E1E1E',
    padding: 18,
    marginVertical: 10,
    marginHorizontal: '5%',
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#424242ff',
  },    
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0981f1ff',
    marginBottom: 6,
  },
  linha: {
    height: 1,
    backgroundColor: '#e6e6e6',
    marginVertical: 8,
  },
  info: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 4,
  },
  label: {
    fontWeight: '600',
    color: '#0981f1ff',
  },
});