var primeiroValor = parseInt(prompt ("Digite o primeiro valor:"))
var segundoValor = parseInt(prompt ("Digite o segundo valor: "))

var Operacao = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação , 3 para soma e 4 para subtração :")

if (Operacao == 1) {
  var Resultado = primeiroValor / segundoValor 
  document.write("<h2>" + primeiroValor + "/" + segundoValor + "=" + Resultado + "</h2>") }

else if (Operacao == 2) {var Resultado = primeiroValor * segundoValor 
  document.write("<h2>" + primeiroValor + " * " + segundoValor + "=" + Resultado + "</h2>") }

else if (Operacao == 3 ) {var Resultado = primeiroValor + segundoValor 
  document.write("<h2>" + primeiroValor + " + " + segundoValor + "=" + Resultado + "</h2>")  }

else if (Operacao == 4 ) {var Resultado = primeiroValor - segundoValor 
  document.write("<h2>" + primeiroValor + " - " + segundoValor + "=" + Resultado + "</h2>")  }

else { document.write ("<h2>Opção inválida</h2>")
  
}



