$(document).ready(function () {
    var id = location.hash;
    id = id.replace('#', '');
    var path = location.pathname;
    path = path.split("/");
    path = path[1];
    var i = 1;

//    $.ajax({
//       url: '/images.php',
//       method: 'post',
//       data: {
//           path: 'assets/img/gallery/' + path + '/'+id+'/',
//       },
//       success:function(d){
//           alert(d[3]);
//       }
//    });


    var dir = '/assets/img/gallery/' + path + '/' + id + '/';
    var s_ttl = id.replace(/-/g, ' ');
    $('.img-responsive').attr('src', '../assets/img/gallery/' + path + '/' + id + '/page-side-img.jpg');
    $('.gal-ttl h3').text(s_ttl);
    if (window.location.hash) {
        var fl = $('.lrg-imgs').find('.gal3-item');
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


    } else {

    }


//    for(i=1; i<18; i++){
//           $('.lrg-imgs').append('<div class="gal3-item"><div class="item-wrapper">'+
//                     '<a href="../assets/img/gallery/'+path+'/'+id+'/'+i+'.jpg" title="Some Title">'+
//                     '<img class="lazy" src="../assets/img/blueimp-gallery/loading.gif"  data-original="../assets/img/gallery/'+path+'/'+id+'/'+i+'.jpg" style="height: 100%; width: auto; cursor: -webkit-zoom-in; display: inline;"/>'+
//                     '</a></div></div>');
//                      $('.gll-tmb').append('<img src="../assets/img/gallery/'+path+'/'+id+'/'+i+'.jpg" alt="img" data-index="'+i+'" style="width: 130px;"/>')  
//             
//         }

});