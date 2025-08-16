import { StyleSheet,View,Text } from "react-native";

const CardCep = ({cidade, bairro , rua})=>{
    return(
        <View>
            <Text>Cidade:{cidade}</Text>
            <Text>Bairro:{bairro}</Text>
            <Text>Rua:{rua}</Text>
        </View>
    );
};
export default CardCep;