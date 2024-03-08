import React, { useRef, useState } from 'react'


enum Operadores{
    suma,resta,multiplicar,dividir
  }
const useCalculadora = () => {


  const [numeroAnt, setNumeroAnt] = useState('0')

  const [numero, setNumero] = useState('0')

  //este useref se usa para hacer las operaciones matematicas
  const operacionarealizar = useRef<Operadores>()

  const limpiar = () =>{
    setNumero('0')
    setNumeroAnt('0')
  }

  //armar numeros para visualizar
  const armarNum =(numeroTexto:string) =>{

    //no aceptar doble punto
    if (numero.includes('.') && numeroTexto === '.') return;

    if (numero.startsWith('0') || numero.startsWith('-0') ) {

      //punto decimal
      if (numeroTexto === '.') {
        setNumero(numero + numeroTexto)
      }
      //evaluar si es otro cero y hay punto
      else if( numeroTexto === '0' && numero.includes('.'))
      {
          setNumero(numero + numeroTexto)
      } 
      //evaluar si es diferente de cero y no hay un punto
      else if( numeroTexto !== '0' && !numero.includes('.'))
      {
          setNumero(numeroTexto)
      } 
      //evitar 00000.00
      else if( numeroTexto === '0' && !numero.includes('.'))
      {
          setNumero( numeroTexto)
      }
      
      else{

      }

    } else {
      setNumero(numero + numeroTexto)
    }

   
  }

  //boton +/-
  const positivonegativo = ()=>{
    if (numero.includes('-')) {
      setNumero(numero.replace('-', ''))
    }else{
      setNumero('-' + numero)
    }
  } 
//boton eliminar elementos uno a uno
  const btnDel= ()=> {

    let negativo = '';
    let numeroTemp = numero
    if (numero.includes('-')) {
      negativo = '-'
      numeroTemp = numero.substring(1)

    }

    if (numero.length > 1  ) {
      setNumero(negativo + numeroTemp.slice(0,-1))
    }else{
      setNumero('0')
    }
  }

//cambia el numero al numero pequenio de arriba para despues ejecutar una operacion
  const cambNumporAnt = () => {
    if (numero.endsWith('.')) {
      setNumeroAnt(numero.slice(0,-1))
    } else {
      setNumeroAnt(numero)
    }
    setNumero('0')
  }

  const btnDividir = () =>{
    cambNumporAnt();
    operacionarealizar.current = Operadores.dividir;
  }

  const btnMultiplicar = () =>{
    cambNumporAnt();
    operacionarealizar.current = Operadores.multiplicar;
  }

  const btnRestar = () =>{
    cambNumporAnt();
    operacionarealizar.current = Operadores.resta;
  }

  const btnSumar = () =>{
    cambNumporAnt();
    operacionarealizar.current = Operadores.suma;
  }

//realizar calculos de las operaciones
  const calcular  =() => {

    const num1 = Number(numero)
    const num2 = Number(numeroAnt)

    switch (operacionarealizar.current) {
      case 
      Operadores.suma:
        setNumero(`${num1 + num2}`)
        break;
        case 
        Operadores.resta:
          setNumero(`${num2 - num1}`)
          break;
          case 
        Operadores.multiplicar:
          setNumero(`${num1 * num2}`)
            break;
            case
        Operadores.dividir:
            setNumero(`${num2 / num1}`)
              break;
    
     
    }

    setNumeroAnt('0')

  }

  return {
    numero,numeroAnt,limpiar,positivonegativo,
    btnDel,btnDividir,btnMultiplicar,btnRestar,btnSumar,
    armarNum,calcular

  }
}

export default useCalculadora