<body>
    <div class="initiatives_form">
        <label><h1 style="color: black !important">Initiatives input form</h1></label>
        <form id="initiative-fm">
        Title: <input type="text" id="ttl" class="block">
        Description: <textarea type="text" id="desc"></textarea>
        Category: <select id="cat">
            <option>the_cm</option>
            <option>the_leader</option>
            <option>the_visionary</option>
                  </select><br>
        Image: <input type="text" id="img">
        <button id="initv-sbmt">Submit</button>
        </form>
    </div>
    <div class="video_galry_form">
        <label><h1 style="color: black !important">Video Gallery input form</h1></label>
        <form id="video_galry_fm">
        Video url: <input type="text" id="v-url" class="block">
        Title: <textarea type="text" id="v-ttl"></textarea>
        Video ID: <input type="text" id="v-id">
        <button id="vdeo-sbmt">Submit</button>
        </form>
    </div>
    
    <style>
        .initiatives_form{
            width: 29%;
            margin: 10px;
            color: black !important;
            float: left;
            border-right: 1px solid #333; 
            border-right-style: dotted; 
        }
        input{
            width: 350px;
            height: 30px;
            margin-bottom: 20px;
        }
        textarea{
            width: 350px;
            height: 100px;
            margin-bottom: 20px;
        }
        #cat{
            margin-bottom: 20px;
        }
        
        .video_galry_form{
            width: 29%;
            margin: 10px;
            color: black !important;
            float: left;
        }
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
      <script type="text/javascript">
          $(document).ready(function(){
    $('#initv-sbmt').click(function(e){
        e.preventDefault();
        $.ajax({
           url: '/index/initiatives_input',
           type: 'post',
           data: {
               'ttl': $('#ttl').val(),
               'desc': $('#desc').val(),
               'img': $('#img').val(),
               'catg': $('#cat').val(),
               
           },
           success: function(d){
              document.getElementById('initiative-fm').reset(); 
              alert(d);
           }
        });
        
    });
    $('#vdeo-sbmt').click(function(e){
        e.preventDefault();
        $.ajax({
           url: '/index/vdo_galry_input',
           type: 'post',
           data: {
               'y_url': $('#v-url').val(),
               'ttl': $('#v-ttl').val(),
               'v_id': $('#v-id').val()
           },
           success: function(d){
              document.getElementById('video_galry_fm').reset(); 
              alert(d);
           }
        });
        
    });
    
    
    
    
    });
    </script>