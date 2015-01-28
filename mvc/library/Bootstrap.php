<?php

class Bootstrap {

  function __construct() {
    $temp_url = strtolower(trim($_SERVER['REQUEST_URI'], '/'));
    $url = explode('/', $temp_url);
  
    require APP_PATH.'/controllers/index.php';
    (new Index_Controller()) ->index($url);
  }
}
