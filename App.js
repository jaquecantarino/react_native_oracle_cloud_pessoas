import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PessoaAddTela from "./telas/PessoaAddTela";
import PessoaListTela from "./telas/PessoaListTela";

//cria a pilha
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    /* integração entre o sistema operacional e a navegação */
    <NavigationContainer> 
      <Stack.Navigator
        /* onde escolho qual tela vai parecer primeiro, quando eu iniciar o app */
        initialRouteName="PessoaAdd">
        <Stack.Screen
          name="PessoaAdd"
          component={PessoaAddTela}/>
        <Stack.Screen
          name="PessoaList"
          component={PessoaListTela}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
