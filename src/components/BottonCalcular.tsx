import React from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import { styles } from '../theme/apptheme'

//interfas del boton para usar un prop
interface Props{
    texto:string,
    color?: string,
    ancho?: boolean;
    accion: (numeroTexto: string)=> void;

    
}
//uso del prop en el hook de boton
const BottonCalcular = ({texto,color = '#2d2d2d', ancho= false, accion } : Props) => {
  return (
    <TouchableOpacity
    onPress={() => accion(texto)}
    >
    <View style={{
        ...styles.boton,
        backgroundColor:color,
        width: (ancho) ? 180 : 80
        
    
    }}>
    <Text style={{
        ...styles.botontexto,
        color:(color === '#9B9B9B')? 'black' : 'white',
        fontWeight:'bold'
    }}>{texto}</Text>
  </View>
  </TouchableOpacity>
  )
}

export default BottonCalcular