<?php
error_reporting(E_ALL);
$path = $_POST['path'];
define('APP_PATH', dirname(__FILE__).'/');

//echo $path = APP_PATH. "assets/img/gallery/the_leader/KCR-addressing-metro-displaced-people-at-sulthanbazar";
//echo $path = APP_PATH."$path";

$list = scandir($path);

echo (json_encode($list));

?>