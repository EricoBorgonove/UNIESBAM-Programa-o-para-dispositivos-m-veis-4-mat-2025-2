
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler'  // importar o configurador de ações 
import Login from './src/screens/Login';


export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login/>
    </SafeAreaView>

  );
}
