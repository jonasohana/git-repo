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
$myarray = array("Rich", "Barbara", "Katie Jane", "Jessica");
echo "The first person is $myarray[0]<br />\n";
echo "The last person is $myarray[3]<br />\n";
echo "The last person + 1 is $myarray[4]<br />\n";
echo "<br>\n";

$anotherarray = array("fruit" => "banana", "vegetable" => "carrot");
echo "My favorite fruit is {$anotherarray['fruit']}\n";
echo "<br>\n";

$counter1 = 1;
$counter1++;
echo "var counter1 = $counter1<br />\n";
echo "<br>\n";

$test1 = 5;
$test1 *= 1.10;
echo "5 * 1.20 = $test1<br />\n";

$string1 = "This is ";
$string2 = "a concatenation test";
$string3 = $string1 . $string2;
echo "$string3";
echo "<br>\n";



?>

</body>
</html>