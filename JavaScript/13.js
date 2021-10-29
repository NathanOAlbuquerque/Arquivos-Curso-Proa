<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade13</title>
</head>
<body>
    <script>
        var a = parseInt(prompt('Digite um valor.'));
        var b = parseInt(prompt('Digite um valor.'));
        var c = parseInt(prompt('Digite um valor.'));
        var d = parseInt(prompt('Digite um valor.'));
        var e = parseInt(prompt('Digite um valor.'));
        var f = parseInt(prompt('Digite um valor.'));
        var g = parseInt(prompt('Digite um valor.'));
        var h = parseInt(prompt('Digite um valor.'));
        var i = parseInt(prompt('Digite um valor.'));
        var j = parseInt(prompt('Digite um valor.'));
        var resultado = 0;
        
        if (a <= 40){
            resultado += a;
        } if (b <= 40){
            resultado += b;
        } if (c <= 40){
            resultado += c;
        } if (d <= 40){
            resultado += d;
        } if (e <= 40){
            resultado += e;
        } if (f <= 40){
            resultado += f;
        } if (g <= 40){
            resultado += g;
        } if (h <= 40){
            resultado += h;
        } if (i <= 40){
            resultado += i;
        } if (j <= 40){
            resultado += j;
        } 

        document.write(`Essa é a soma dos números menores que 40: ${resultado}`);


    </script>
</body>
</html>