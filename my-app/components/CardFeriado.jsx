import { StyleSheet, View, Text } from "react-native";

const CardFeriado = ({ nome, data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{nome}</Text>
      <Text style={styles.data}>Data: {data}</Text>
    </View>
  );
};

export default CardFeriado;

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
    borderColor: "#333",
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0981f1ff", // cor de destaque (laranja)
    marginBottom: 5,
  },
  data: {
    fontSize: 16,
    color: "#FFF",
  },
});
