import { StyleSheet, View, TextInput } from 'react-native';

export const InputDDD = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        placeholder="Digite o DDD"
        placeholderTextColor="#888"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const InputCep = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={8}
        placeholder="Digite seu CEP"
        placeholderTextColor="#888"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const InputCNPJ = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={14}
        placeholder="Digite o CNPJ"
        placeholderTextColor="#888"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const InputFeriado = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={4}
        placeholder="Digite o Ano"
        placeholderTextColor="#888"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
};

export const InputFipe = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o tipo do veículo ex: carros"
        placeholderTextColor="#888"
        keyboardType="default"
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    alignItems:'center',
    width: '100%',
    marginVertical: 8,
  },
  input: {
    
    height: 50,
    width: '80%',
    backgroundColor: '#1E1E1E',
    borderColor: '#333',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
});
