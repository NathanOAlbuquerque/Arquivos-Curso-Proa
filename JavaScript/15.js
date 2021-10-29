<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade15</title>
</head>
<body>
    <script>

        var preco = 8.190;
        var parcela = 12;
        var resultado;
        var nome;
        
        function inicio(){
            var nome = prompt('Olá! qual o seu nome?');
            alert(`Olá ${nome}, é um prazer ter você aqui!`);
            parcelas()
        }

        function parcelas(){
            var escolha = parseInt(prompt('Em quantas vezes deseja parcelar? || 1) $8.190 | 2) $4.095 | 3) $2.730 | 4) $2.047,05 | 5) $1.638 | 6) $1.365 | 7) $1.170 | 8) $1.023,75 | 9) $910 | 10) $819 | 11) $744.54 | 12) $682,5.'));
            switch(escolha){
                case 1:
                    parcela1();
                    break;
                case 2:
                    parcela2();
                    break;
                case 3:
                    parcela3();
                    break;
                case 4:
                    parcela4();
                    break;
                case 5:
                    parcela5();
                    break;
                case 6:
                    parcela6();
                    break;
                case 7:
                    parcela7();
                    break;
                case 8:
                    parcela8();
                    break;
                case 9:
                    parcela9();
                    break;
                case 10:
                    parcela10();
                    break;
                case 11:
                    parcela11();
                    break;
                case 12:
                    parcela12();
                    break;
                default:
                    alert('Por favor digite um número de 1 a 12.');
                    parcelas();
            }
        }
        
        function parcela1() {
            alert('Você escolheu pagar: $8.190');
            window.close;
        }

        function parcela2() {
            alert('Você escolheu pagar: $4.095');
            window.close;
        }

        function parcela3() {
            alert('Você escolheu pagar: $2.730');
            window.close;
        }

        function parcela4() {
            alert('Você escolheu pagar: $2.047,05');
            window.close;
        }

        function parcela5(){
            alert('Você escolheu pagar: $1.638');
            window.close;
        }

        function parcela6(){
            alert('Você escolheu pagar: $8.190');
            window.close;
        }

        function parcela7(){
            alert('Você escolheu pagar: $8.190');
            window.close;
        }

        function parcela8() {
            alert('Você escolheu pagar: $8.190');
            window.close;
        }

        function parcela9() {
            alert('Você escolheu pagar: $8.190');
            window.close;
        }

        function parcela10() {
            alert('Você escolheu pagar: $8.190');
            window.close;
        }

        function parcela11() {
            alert('Você escolheu pagar: $8.190');
            window.close;
        }

        function parcela12() {
            alert('Você escolheu pagar: $8.190');
            window.close;
        }

        inicio()
    </script>
</body>
</html>