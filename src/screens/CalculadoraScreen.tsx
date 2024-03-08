import React from 'react'
import { View ,Text} from 'react-native'
import { styles } from '../theme/apptheme'
import BottonCalcular from '../components/BottonCalcular';
import useCalculadora from '../components/useCalculadora';


const CalculadoraScreen = () => {

  const {
    numero,numeroAnt,limpiar,positivonegativo,
    btnDel,btnDividir,btnMultiplicar,btnRestar,
    btnSumar,armarNum,calcular
  
  } 
  
  = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}> 
        
        {
          // el && funciona como un entonces o condicion positiva
          (numeroAnt !== '0') && 
          (  <Text style={styles.resultadopequeno}>{numeroAnt}</Text>)
        }
       
        <Text style={styles.textoResultado}

        numberOfLines={1}
        //ajustalacantidadd de letras al espacio pemitido
        adjustsFontSizeToFit
        >{numero}</Text> 

        {/* boton con parametros reutilizable el colo, accion,texto son parametros  */}
        <View style={styles.fila}>
        
            <BottonCalcular texto='C' color='#9B9B9B' accion={limpiar}/>
            <BottonCalcular texto='+/-' color='#9B9B9B' accion={ positivonegativo}/>    
            <BottonCalcular texto='del' color='#9B9B9B' accion={ btnDel} />    
            <BottonCalcular texto='/' color='#007590' accion={ btnDividir}/>
            
        </View>
        <View style={styles.fila}>
        
        <BottonCalcular texto='7' accion={ armarNum} />
        <BottonCalcular texto='8' accion={ armarNum} />    
        <BottonCalcular texto='9' accion={ armarNum} />    
        <BottonCalcular texto='X' accion={ btnMultiplicar} color='yellow'/>
        
    </View>
        
    <View style={styles.fila}>
        
        <BottonCalcular texto='6'accion={ armarNum} />
        <BottonCalcular texto='4' accion={ armarNum}/>    
        <BottonCalcular texto='5' accion={ armarNum} />    
        <BottonCalcular texto='-' accion={ btnRestar}color='blue'/>
        
    </View>
    <View style={styles.fila}>
        
        <BottonCalcular texto='1' accion={ armarNum}/>
        <BottonCalcular texto='2' accion={ armarNum}/>    
        <BottonCalcular texto='3' accion={ armarNum} />    
        <BottonCalcular texto='+' color='red' accion={ btnSumar}/>
        
    </View>
    <View style={styles.fila}>
        
        <BottonCalcular texto='0' accion={ armarNum} ancho/>
        <BottonCalcular texto='.' accion={ armarNum}/>        
        <BottonCalcular texto='=' accion={ calcular} color='green'/>
        
    </View>
    
    
    
    


    </View>
  )
}

export default CalculadoraScreen