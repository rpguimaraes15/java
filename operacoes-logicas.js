/*
  passou := falso
   escreval("Digite o Nome do Aluno: ")
   leia(nome)
   escreval("Digite a nota 01 do Aluno: ")
   leia(nota01)
   escreval("Digite a nota 02 do Aluno: ")
   leia(nota02)
   media := (nota01 + nota02) / 2

   se media >= 50 entao
     passou := verdadeiro
     fimse
     
    se ( passou ) && (media >=50 || media <= 70) entao
        escreval ("Aprovado!", nome)
        senao   Ii
             escreval("Reprovado!", nome)
   fimse
   */

   var nome, nota01, nota02;

   passou = false;

   nome = prompt("Digite o Nome do Aluno:")
   nota01 = prompt("Digite a nota 01 do Aluno:")
   nota02 = prompt("Digite a nota 02 do Aluno:")

   media = (parseInt(nota01) + parseInt(nota02)) / 2

   if(media >= 50)
         passou = true;

    if(passou && (media >= media <= 90))  
          alert("aprovado!" + nome)   

    else
    alert("Reprovado!" + nome)