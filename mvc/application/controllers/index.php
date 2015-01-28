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
      case 'the_activist':
        break;
      default:
        $this -> view -> render('index/index');
        break;
    }
  }
}
