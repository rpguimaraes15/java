/*  escreval("Digite o Nome do Aluno: ")
   leia(nome)
   escreval("Digite a nota 01 do Aluno: ")
   leia(nota01)
   escreval("Digite a nota 02 do Aluno: ")
   leia(nota02)
   media := (nota01 + nota02) / 2
   
   se media >= 5 entao
     escreval("Aprovado!", nome)
     senao
          escreval("Reprovado!", nome)
   fimse*/

   var nome, nota01, nota02;
   nome = prompt("Digite o Nome do Aluno:")
   nota01 = prompt("Digite a nota 01 do Aluno:")
   nota02 = prompt("Digite a nota 02 do Aluno:")

   media = (parseInt(nota01) + parseInt(nota02)) / 2

   if(media >= 50)
        alert("Aprovado!" + nome)

    else
    alert("Reprovado!" + nome)
 
         

