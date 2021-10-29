<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

        var a = parseInt(prompt('Digite um valor'));
        var b = parseInt(prompt('Digite mais um valor'));
        var c = parseInt(prompt('Digite outro valor'));

        if (a > b && a > c){
            document.write(`O maior número é o ${a}`);
        } else if (b > a && b > c){
            document.write(`O maior número é o ${b}`);
        } else {
            document.write(`O maior número é o ${c}`);
        }

    </script>
</body>
</html>