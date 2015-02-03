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
    
    <style>
        .initiatives_form{
            width: 29%;
            margin: 10px;
            color: black !important;
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
    </style>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
      <script type="text/javascript">
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
    </script>