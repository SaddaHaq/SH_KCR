$(document).ready(function () {
    var id = location.hash;
    id = id.replace('#', '');
    var path = location.pathname;
    path = path.split("/");
    path = path[1];
    var i = 1;
    var s_ttl = id.replace(/-/g, ' ');
    
    
    
//    $.ajax({
//       url: '/images.php',
//       type: 'post',
//       data: {
//           path: 'assets/img/gallery/' + path + '/'+id+'/',
//       },
//       success:function(d){
//           var data = JSON.parse(d);
//           var lngth = data.length;
////           alert(lngth);
//           var i;
//           for(i=2; i<lngth; i++){
//           $('.gamma-gallery').append('<li><div data-alt="img03" data-description="<h3>' + s_ttl + '</h3>" data-max-width="1800" data-max-height="1350">'+
//                                '<div data-src="../assets/img/gallery/the_cm/' + id + '/'+data[i]+'" data-min-width="200"></div>'+
//                                '<noscript>'+
//                                '<img src="../assets/img/gallery/the_cm/' + id + '/'+data[i]+'"/></noscript></div></li>');
//       };
//       $('.main header').find('h1').text(s_ttl);
//       $('title').text(s_ttl);
//       
//       $(function () {
//
//                var GammaSettings = {
//                    // order is important!
//                    viewport: [{
//                            width: 1200,
//                            columns: 5
//                        }, {
//                            width: 900,
//                            columns: 4
//                        }, {
//                            width: 500,
//                            columns: 3
//                        }, {
//                            width: 320,
//                            columns: 2
//                        }, {
//                            width: 0,
//                            columns: 2
//                        }]
//                };
//
//                Gamma.init(GammaSettings, fncallback);
//
//
//                // Example how to add more items (just a dummy):
//
//                var page = 0,
//                        items = ['<li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="images/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="images/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="images/xlarge/3.jpg" data-min-width="700"></div><div data-src="images/large/3.jpg" data-min-width="300"></div><div data-src="images/medium/3.jpg" data-min-width="200"></div><div data-src="images/small/3.jpg" data-min-width="140"></div><div data-src="images/xsmall/3.jpg"></div><noscript><img src="images/xsmall/3.jpg" alt="img03"/></noscript></div></li>']
//
//                function fncallback() {
//
////                    $('#loadmore').show().on('click', function () {
////
////                        ++page;
////                        var newitems = items[page - 1]
////                        if (page <= 1) {
////
////                            Gamma.add($(newitems));
////
////                        }
////                        if (page === 1) {
////
////                            $(this).remove();
////
////                        }
////
////                    });
//
//                }
//
//            });
//   }
//    });














    var dir = '/assets/img/gallery/' + path + '/' + id + '/';
//    var s_ttl = id.replace(/-/g, ' ');
    $('.img-responsive').attr('src', '../assets/img/gallery/' + path + '/' + id + '/page-side-img.jpg');
    $('.gal-ttl h3').text(s_ttl);
    if (window.location.hash) {
        var fl = $('.lrg-imgs').find('.gal3-item');
        setTimeout(function () {
                    $('.gl-dm').fadeOut('slow');
                }, 1000);
        fl.each(function () {
            var img = '../assets/img/gallery/' + path + '/' + id + '/' + id + '-' + i + '.jpg';
            $(this).find('.item-wrapper a').attr('href', img);
            $(this).find('.item-wrapper .lazy').attr('data-original', img);
            i++;
        });

        var tmb = $('.gal3-thumb-carousel').find('img');
        var l = 1;
        tmb.each(function () {
            var tmb = '../assets/img/gallery/' + path + '/' + id + '/' + id + '-' + l + '.jpg';
            $(this).attr('src', tmb)
            l++;
        });


    }
//    else {
//
//    }


//    for(i=1; i<18; i++){
//           $('.lrg-imgs').append('<div class="gal3-item"><div class="item-wrapper">'+
//                     '<a href="../assets/img/gallery/'+path+'/'+id+'/'+i+'.jpg" title="Some Title">'+
//                     '<img class="lazy" src="../assets/img/blueimp-gallery/loading.gif"  data-original="../assets/img/gallery/'+path+'/'+id+'/'+i+'.jpg" style="height: 100%; width: auto; cursor: -webkit-zoom-in; display: inline;"/>'+
//                     '</a></div></div>');
//                      $('.gll-tmb').append('<img src="../assets/img/gallery/'+path+'/'+id+'/'+i+'.jpg" alt="img" data-index="'+i+'" style="width: 130px;"/>')  
//             
//         }

});