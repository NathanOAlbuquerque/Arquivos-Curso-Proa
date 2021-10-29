<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade16</title>
</head>
<body>
    <script>

        var n = parseInt(prompt('Digite a sua 1º nota:'));
        var n2 = parseInt(prompt('Digite a sua 2º nota:'));
        var soma = n + n2;
        var media = soma / 2;

        if (media >= 7){
            document.write(`Aprovado! sua nota é: ${media}`);
        } else {
            document.write(`Reprovado... sua nota é: ${media}`);
        }

    </script>
</body>
</html>