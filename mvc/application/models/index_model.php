<?php 
class Index_Model extends Model{
    
    function __construct() {
        parent::__construct();
     
    }
    
   
    public function get_video_urls(){
        
        $urls = $this->db->prepare('SELECT * FROM _videos_gallery_');
        $urls->execute();
        $res = $urls->fetchAll(PDO::FETCH_ASSOC); 
        echo $res = json_encode($res);
        return $res;
    }
    
    
}




?>