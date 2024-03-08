import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import CalculadoraScreen from './src/screens/CalculadoraScreen'
import { styles } from './src/theme/apptheme';

const App = () => {
  return (
    <SafeAreaView  style={styles.fondo}>
       {/* modifical los colores de la barra de hora bateria y senal */}
       <StatusBar 
       backgroundColor="black"
       barStyle="light-content"
       />
      <CalculadoraScreen/>
    </SafeAreaView>
    
  )
}

export default App