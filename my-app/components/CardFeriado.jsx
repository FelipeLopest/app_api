import { StyleSheet,View,Text } from "react-native";

const CardFeriado = ({nome , data}) => {
    return(
        <View>
            <Text>Feriado:{nome}</Text>
            <Text>Data:{data}</Text>   
        </View>
    );
}

export default CardFeriado