<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Atividade19</title>
</head>
<body>
    <script>
        var a = parseInt(prompt('Digite um valor'));
                alert(`O valor de A é ${a}`);
        var b = parseInt(prompt('Digite um valor'));
                alert(`O valor de B é ${b}`);
        var troca = "";

        troca = a;
        a = b;
        b = troca;
       
        document.write(`O novo valor de A é ${a} <br>`);
        document.write(`O novo valor de B é ${b}`);
    </script>
</body>
</html>