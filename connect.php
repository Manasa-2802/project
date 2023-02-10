<?php
$server="localhost";
$username ="root";
$password ="";
$con=mysqli_connect($server,$username,$password);
if(!$con){
    die("connection to thiss database failed".mysqli_connect_error());
}
echo "successfully connected";

?>
