<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php
    $diameter = 10;
    $radius = ($diameter*.50);
    $pie = 3.14159265359;
    $circlearea = $pie * ($radius * $radius);
    echo "a circle <b>diameter $diameter</b> and a radius of $radius has an area of $circlearea";


    ?>
</body>
</html>