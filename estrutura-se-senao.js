

function acaoBotao()  {
      var valor01, valor02, resultado, operacao
      valor01 = prompt("Digite o primeiro Valor: ")
      operacao = prompt("Digite a Operação: EX:  + , - , * , /")
      valor02 = prompt("Digite o Segundo Valor: ")

        if ( operacao == "+" ){
            resultado = parseInt( valor01 ) + parseInt( valor02 )
        }else if(operacao == "-"){
            resultado = parseInt( valor01 ) - parseInt( valor02 )
        }else if(operacao == "*"){
             resultado = parseInt( valor01 ) * parseInt( valor02 )
        }else if(operacao == "/"){
             resultado = parseInt( valor01 ) / parseInt( valor02 )
        }
         document.getElementByid("paragrafo").innerText = resultado
    }