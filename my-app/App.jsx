import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import Home from './screens/Tela_home'
import Tela_ddd from './screens/Tela_ddd'
import Tela_cep from './screens/Tela_cep'
import Tela_cnpj from './screens/Tela_cnpj'
import Tela_feriados from './screens/tela_feriados'
import Tela_fipe from './screens/Tela_fipe'
import Tela_pix from './screens/Tela_pix'
import Tela_registrobr from './screens/Tela_registrobr'
import Tela_taxa from './screens/Tela_taxa'
import Tela_cambio from './screens/Tela_cambio'
import Tela_bancos from './screens/Tela_bancos'





const MenuNav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator>
        <MenuNav.Screen name="Inicio" component={Home} />
        <MenuNav.Screen name="DDD" component={Tela_ddd} />
        <MenuNav.Screen name="CNPJ" component={Home} />
        <MenuNav.Screen name="CEP" component={Tela_cep} />
        <MenuNav.Screen name="Feriados" component={Home} />
        <MenuNav.Screen name="FIPE" component={Home} />
        <MenuNav.Screen name="Pix" component={Home} />
        <MenuNav.Screen name="RegistroBR" component={Home} />
        <MenuNav.Screen name="Taxa" component={Home} />
        <MenuNav.Screen name="Cambio" component={Home} />
        <MenuNav.Screen name="Bancos" component={Home} />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
