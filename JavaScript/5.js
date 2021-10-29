<html>
<head>
    
</head>
<body>
    <script>
        function inicio() {
            nome = prompt('Insira seu nome');
			alert(`Olá ${nome}, é um prazer ter você aqui!`);
            opcoes();
        }

        function opcoes() {
            var escolha = parseInt(prompt('Selecione uma opção: 1) Adição | 2) Subtração | 3) Multiplicação | 4) Divisão.'));
            switch (escolha) {
                case 1:
                    adicao()
                    break;
                case 2:
                    subtracao()
                    break;
                case 3:
                    multiplicacao()
                    break;
                case 4:
                    divisao()
                    break;
                default:
                    alert('Por favor, digite um número de 1 a 6.');
                    opcoes();
            }
        }

        function adicao(){
            var a = parseInt(prompt('Digite um valor'));
            var b = parseInt(prompt('Digite outro valor'));
            var resultado;

            resultado = a + b;
            document.write(`A soma de ${a} + ${b} é ${resultado}`)

        }

        function subtracao(){
            var a = parseInt(prompt('Digite um valor'));
            var b = parseInt(prompt('Digite outro valor'));
            var resultado;

            resultado = a - b;
            document.write(`A subtracão de ${a} - ${b} é ${resultado}`)

        }

        function multiplicacao(){
            var a = parseInt(prompt('Digite um valor'));
            var b = parseInt(prompt('Digite outro valor'));
            var resultado;

            resultado = a * b;
            document.write(`A multiplicacão de ${a} x ${b} é ${resultado}`)

        }

        function divisao(){
            var a = parseInt(prompt('Digite um valor'));
            var b = parseInt(prompt('Digite outro valor'));
            var resultado;

            resultado = a / b;
            document.write(`A divisão de ${a} / ${b} é ${resultado}`)

        }


        inicio();
    </script>
</body>
</html>