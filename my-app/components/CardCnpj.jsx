import { StyleSheet, View, Text } from "react-native";

const CardCnpj = ({ cnpj, razaoSocial, nomeFantasma, cep, telefone }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.razao}>{razaoSocial}</Text>
      <Text style={styles.nomeFantasma}>{nomeFantasma}</Text>
      <View style={styles.linha} />
      <Text style={styles.info}><Text style={styles.label}>CNPJ:</Text> {cnpj}</Text>
      <Text style={styles.info}><Text style={styles.label}>CEP:</Text> {cep}</Text>
      <Text style={styles.info}><Text style={styles.label}>Telefone:</Text> {telefone}</Text>
    </View>
  );
};

export default CardCnpj;

const styles = StyleSheet.create({
  card: {
    width: "90%",
   backgroundColor: "#1E1E1E",
    padding: 18,
    marginVertical: 10,
    marginHorizontal: "5%",
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
    borderWidth: 1,
    borderColor: "#484848ff",
  },
  razao: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0981f1ff",
  },
  nomeFantasma: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#0981f1ff",
    marginBottom: 8,
  },
  linha: {
    height: 1,
    backgroundColor: "#e6e6e6",
    marginVertical: 10,
  },
  info: {
    fontSize: 15,
    color: "#fffefeff",
    marginBottom: 4,
  },
  label: {
    fontWeight: "600",
    color: "#0981f1ff",
  },
});
