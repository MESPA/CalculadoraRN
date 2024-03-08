import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{
        flex:1,
        backgroundColor: 'black',
        
    },
    calculadoraContainer:{
        flex:1,
        paddingHorizontal:20,
        justifyContent:'flex-end',
    },
    textoResultado:{
        color:'white',fontSize:60,
        textAlign:'right',


    },
    resultadopequeno:{
        color:'white',fontSize:20,
        textAlign:'right',

    },
    fila:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10,
        paddingHorizontal:10
    },

    boton:{
        height: 80,
        width: 80,
        backgroundColor:'#9B9B9B',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal:10,
        color:'white'
        
    },
    botontexto:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight:'300'
    }
})