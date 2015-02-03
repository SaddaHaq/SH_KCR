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
    
    public function initiatives_input(){
        
        $ttl = $_POST['ttl'];
        $desc = $_POST['desc'];
        $img = $_POST['img'];
        $catg = $_POST['catg'];
        if($ttl == '' || $ttl == NULL){
            echo 'all fields are reqiried';
            return;
        }
        
        $insrt = $this->db->prepare("INSERT INTO _initiatives_(_title_, _description_, _category_, _image_) VALUES (".$this->db->quote($ttl).",".$this->db->quote($desc)."," .$this->db->quote($catg).",".$this->db->quote($img).")");
        $insrt->execute();
        
        if($insrt == true){
            echo 'Added new Initiative successfully!!';
        }
        else{
            echo 'Faild';
        }
        return;
    }
    
    
    public function get_initiatives(){
        $catg = $_POST['catg'];
        $intivs = $this->db->prepare("SELECT * FROM _initiatives_ WHERE _category_ = :cat");
        $res = $intivs->execute(array(':cat'=>$catg));
        $res = $intivs->fetchAll(PDO::FETCH_ASSOC);
//        $res = $intivs->errorInfo();
        echo $res = json_encode($res);
        return $res;
    }
    
}




?>