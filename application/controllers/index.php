<?php

class Index_Controller extends Controller{
  function __construct() {
    parent::__construct();
  }
  
  public function index($params){ 
    switch($params[0]){
      case 'the_cm':
        switch($params[1]){
          case 'initiatives':
          case 'blog':
          case 'albums':
          case 'news':
          case 'forms':
            $this -> view -> render('the_cm/'.$params[1]);
            break;
          default:
            echo 'Page not found';
            break;
        }
        break;
      case 'the_leader':
        switch($params[1]){
          case 'initiatives':
          case 'albums':
          case 'news':
            $this -> view -> render('the_leader/'.$params[1]);
            break;
          default:
            echo 'Page not found';
            break;
        }
        break;
      case 'the_visionary':
        switch($params[1]){
          case 'initiatives':
          case 'history':
          case 'albums':
          case 'news':
            $this -> view -> render('the_visionary/'.$params[1]);
            break;
          default:
            echo 'Page not found';
            break;
        }
        case 'contact':
            $this -> view -> render('contact/'.$params[0]);
        break;
    case 'albums':
            $this -> view -> render('albums/'.$params[0]);
        break;
          case 'gallery':
            $this -> view -> render('gallery/'.$params[0]);
        break;
      default:
        $this -> view -> render('index/index');
        break;
    }
  }
  
  public function get_albums(){
      $dir = 'assets/img/albums';
      $files = scandir($dir);
      echo $files = json_encode($files);
      return $files;
      
  }
  public function get_images(){
      $id = $_POST['id'];
      $dir = "assets/img/albums/$id";
      $files = scandir($dir);
      echo $files = json_encode($files);
      return $files;
  }
  
//  public function get_video_albums(){
//      echo $this->model->get_video_urls();  
//      }
}
