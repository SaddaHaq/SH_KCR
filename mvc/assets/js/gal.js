$(document).ready(function () {
    $('.lft-mnu-item').mouseenter(function(){
   $('.left-mnu').css({'width':'200px'}); 
   $('.mnu-itm-ttl').show();
});

  $('.lft-mnu-item').mouseleave(function(){
   $('.left-mnu').css({'width':'59px'}); 
   $('.mnu-itm-ttl').hide();
})
$('.gamma-gallery').on('click', '.gamma-description', function(){
        $('.left-mnu').css({'opacity':'0'});
});
//
$('.gamma-container').on('click', '.gamma-btn-close', function(){
       $('.left-mnu').css({'opacity':'1'});
});
    
    
    var id = location.hash;
    id = id.replace('#', '');
    var path = location.pathname;
    path = path.split("/");
    path = path[1];
    var i = 1;
    var s_ttl = id.replace(/-/g, ' ');
    
    var path = location.pathname;
    
    if(path == '/albums'){
    $.ajax({
       url: '/index/get_albums',
       type: 'post',
       data: {
       },
       success:function(d){
           var data = JSON.parse(d);
           var lngth = data.length;
           var i;
           for(i=2; i<lngth; i++){
               var ttl = data[i].replace(/-/g, ' ');
           $('.gamma-gallery').append('<li><div data-alt="img03" data-url="gallery/'+data[i]+'" data-description="<h3>' + ttl + '</h3>" data-max-width="1800" data-max-height="1350">'+
                                '<div data-src="assets/img/albums/'+data[i]+'/albm-img.jpg" data-min-width="138"></div>'+
                                '<noscript>'+
                                '<img src="assets/img/albums/'+data[i]+'/albm-img.jpg"/></noscript></div></li>');
       };
//       $('.main header').find('h1').text(s_ttl);
//       $('title').text(s_ttl);
       
       $(function () {

                var GammaSettings = {
                    // order is important!
                    viewport: [{
                            width: 1800,
                            columns: 5
                        }, {
                            width: 900,
                            columns: 4
                        }, {
                            width: 900,
                            columns: 3
                        }, {
                            width: 320,
                            columns: 2
                        }, {
                            width: 0,
                            columns: 2
                        }]
                };

                Gamma.init(GammaSettings, fncallback);


                // Example how to add more items (just a dummy):

                var page = 0,
                        items = ['<li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li>']
                function fncallback() {
                    $('#loadmore').show();
//                  $('#loadmore').show().on('click', function () {
//                      ++page;
//                     var newitems = items[page - 1];                      
//                     if (page <= 1) {
//
//                            Gamma.add($(newitems));
//
//                        }
//                        if (page === 1) {
//
//                            $(this).remove();
//
//                        }
//
//                    });

                }

            });
   }
    });
    
    }
    
    path = path.split('/');
if(path[1] == 'gallery'){
    var id = location.pathname;
        id = id.split('/');
        id = id[2];
    
    $.ajax({
       url: '/index/get_images',
       type: 'post',
       data: {
           id: id,
       },
       success:function(d){
           var data = JSON.parse(d);
           var lngth = data.length;
           var i;
           for(i=2; i<lngth; i++){
               var ttl = id.replace(/-/g, ' ');
               ttl = ttl.split('.');
               ttl = ttl[0];
           $('.gamma-gallery').append('<li><div data-alt="img03" data-description="<h3>' + ttl + '</h3>" data-max-width="1800" data-max-height="1350">'+
                                '<div data-src="/assets/img/albums/'+id+'/'+data[i]+'" data-min-width="138"></div>'+
                                '<noscript>'+
                                '<img src="assets/img/albums/'+id+'/'+data[i]+'"/></noscript></div></li>');
       };
       $('.main header').find('h1').text(ttl);
//       $('title').text(s_ttl);
       
       $(function () {

                var GammaSettings = {
                    // order is important!
                    viewport: [{
                            width: 1200,
                            columns: 5
                        }, {
                            width: 900,
                            columns: 4
                        }, {
                            width: 500,
                            columns: 3
                        }, {
                            width: 320,
                            columns: 2
                        }, {
                            width: 0,
                            columns: 2
                        }]
                };

                Gamma.init(GammaSettings, fncallback);


                // Example how to add more items (just a dummy):

                var page = 0,
                        items = ['<li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li>']
                function fncallback() {
                    $('#loadmore').show();
//                  $('#loadmore').show().on('click', function () {
//                      ++page;
//                     var newitems = items[page - 1];                      
//                     if (page <= 1) {
//
//                            Gamma.add($(newitems));
//
//                        }
//                        if (page === 1) {
//
//                            $(this).remove();
//
//                        }
//
//                    });

                }

            });
            setTimeout(function () {
                  $('.a-lod').fadeOut('slow');
                }, 1000);
   }
    });
    
    
}

});