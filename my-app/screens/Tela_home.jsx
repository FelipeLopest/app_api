import { StyleSheet, View, Text,  } from "react-native";

export default function Home() {
  return (
    <View style={styles.containerPai}>
      <View style={styles.card}>
        <Text style={styles.titulo}> Bem-vindo!</Text>
        <Text style={styles.subtitulo}>
          Consulte informações da BrasilAPI de forma simples:
        </Text>

        <View style={styles.lista}>
          <Text style={styles.item}> Consultar DDD</Text>
          <Text style={styles.item}> Buscar CEP</Text>
          <Text style={styles.item}> Informações de CNPJ</Text>
          <Text style={styles.item}> E muito mais!</Text>
        </View>

        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerPai: {
    flex: 1,
    backgroundColor: "#121212", // fundo preto moderno
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    width: "90%",
    padding: 25,
    borderRadius: 16,
    backgroundColor: "#1E1E1E", // cinza escuro elegante
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 8,
    alignItems: "center",
  },
  titulo: {
    fontSize: 26,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 15,
    fontWeight: "400",
    color: "#bbbbbb",
    marginBottom: 20,
    textAlign: "center",
  },
  lista: {
    width: "100%",
    marginBottom: 25,
  },
  item: {
    fontSize: 16,
    color: "#e0e0e0",
    marginVertical: 6,
  }
  
});
