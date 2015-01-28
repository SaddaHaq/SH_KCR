<?php

class Mem_cached {

  function __construct() {
    $this -> cache = new Memcached();
    $server = ($_SERVER['SERVER_NAME'] == 'live') ? '122.248.246.136' : 'localhost';
    $this -> memcached = $this -> cache -> addServer('localhost', '11211');
  }
}