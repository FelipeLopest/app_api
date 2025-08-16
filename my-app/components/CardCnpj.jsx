import { StyleSheet,View, Text } from "react-native";

const CardCnpj = ({cnpj , razaoSocial , nomeFantasma , cep , telefone }) => {
return(<View>
        <Text>Cnpj:{cnpj}</Text>
        <Text>Razao Social: {razaoSocial}</Text>
        <Text>Nome Fantasma: {nomeFantasma}</Text>
        <Text>Cep: {cep}</Text>
        <Text>telefone = {telefone}</Text>
    </View>)
}
export default CardCnpj