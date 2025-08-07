import { StyleSheet, View, TextInput } from 'react-native';

export const InputDDD = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        placeholder="Digite o DDD"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
}

export const InputCep = ({ onChangeText }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        maxLength={8}
        placeholder='Digite seu cep'
        keyboardType='numeric'
        onChange={onChangeText}

      />


    </View>
  )
}

export const InputCNPJ = ({ onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        maxLength={2}
        placeholder="Digite o CNPJ"
        keyboardType="numeric"
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10,
  }
});
