<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade18</title>
</head>
<body>
    <script>
        var produto = parseFloat(prompt('insira o valor do produto'));
        var margem_aumento = parseFloat(prompt('Insira o valor da margem de lucro'));
        var calculo;

        if (produto > 0){
            var porcentagem = margem_aumento / 100;
            calculo = produto * porcentagem;
            resposta = produto + calculo;

            document.write(`o preço de venda do produto informado é ${resposta}`);
        }
    </script>
</body>
</html>