import { StyleSheet,View,Text } from "react-native"

const CardFipe = ({nome , valor })  => {
    return(<View>
        <Text>Nome: {nome}</Text>
        <Text>Valor: {valor}</Text>
    </View>)
    
};

export default CardFipe