<?php

class Bootstrap {

  function __construct() {
    $temp_url = strtolower(trim($_SERVER['REQUEST_URI'], '/'));
    $url = explode('/', $temp_url);

    if($url[0] == 'index' && $url[1] == 'get_albums'){
    require APP_PATH.'/controllers/index.php';
    (new Index_Controller()) -> get_albums();
    }
    elseif ($url[0] == 'index' && $url[1] == 'get_images'){
    require APP_PATH.'/controllers/index.php';
    (new Index_Controller()) -> get_images();
    }
    elseif ($url[0] == 'index' && $url[1] == 'get_video_urls'){
    require APP_PATH.'/models/index_model.php';
    (new Index_Model()) -> get_video_urls();
    }
    else{
    require APP_PATH.'/controllers/index.php';
    (new Index_Controller()) ->index($url);
  }
  }
}
