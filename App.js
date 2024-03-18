import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import CustomButton from './src/components/CustomButton';


export default function App() {

  const logMessage = () => {
    console.log("Oi");
  };

  return (
    <View style={styles.container}>
      <CustomButton onPress={logMessage} text={"Teste Componente"}/>
      <CustomButton onPress={logMessage} text={"Teste Componente 2"}/>
      <CustomButton onPress={logMessage} text={"Teste Componente 3"}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001139", //01184D
    alignItems: 'center',
    justifyContent: 'center',
  },
});
