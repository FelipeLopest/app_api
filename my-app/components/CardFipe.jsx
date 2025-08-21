import { StyleSheet, View, Text } from "react-native";

const CardFipe = ({ nome, valor }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.nome}> {nome}</Text>
      <Text style={styles.valor}>Valor: {valor}</Text>
    </View>
  );
};

export default CardFipe;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 5,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#edececff",
  },
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0981f1ff", // destaque laranja
    marginBottom: 5,
  },
  valor: {
    fontSize: 16,
    color: "#FFF",
  },
});
