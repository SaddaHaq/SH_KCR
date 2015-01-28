
/* home kenburn slider
 ----------------------------------------------*/
var kbs, kenburn = {
  settings: {
    viewport: $('#kb-container')
  },
  init: function () {
    kbs = this.settings;
    this.bindUIActions();
    this.buildKenburn();
  },
  buildKenburn: function () {
    kbs.viewport.kenburnIt({
      images: [
        "assets/img/home/0.jpg",
        "assets/img/home/1.jpg",
        "assets/img/home/2.jpg",
        "assets/img/home/3.jpg"
      ],
      zoom: 1.2,
      duration: 10
    });
  },
  bindUIActions: function () {

  },
  updateContent: function () {

  }
};

$(document).ready(function () {
// in this event changed ID to CLASS 
  var shw_admnu = $('.shw-ad-mnu').on('click', function (e) {
    e.preventDefault();
    var id = $(this).data('id');
      $('#' +id).addClass('in').siblings('#top-mnu').removeClass('in');
      $('.men-title').html($(this).data('title'));
      var img = $(this).data('img');
      var strp = $(this).data('title');
      $('#kb-container').addClass('hidden');
      $('.bckg').removeClass('hidden');
      var path = 'assets/img/home/'+img+'.jpg'
      $('.bckg').css({'background-image': 'url('+path+')'});
      $('#hello-contents .sld-hdng').addClass('hidden');
      $('#hello-contents .sngl-hdng').removeClass('hidden').html(strp);
      
//      kbs.viewport.kenburnIt({
//      images: [
//        "assets/img/home/"+img+".jpg",
//      ],
//      zoom: 1,
//      duration: 10
//    });

    $('#top-mnu section').find('.diamond').children('.out-dmnd').removeClass('dmnd-brdr');
  });

  var top_menu = $('.shw-top-mnu').on('click', function () {
      $('#kb-container').removeClass('hidden');
      $('.bckg').addClass('hidden');
      $('#hello-contents .sld-hdng').removeClass('hidden');
      $('#hello-contents .sngl-hdng').addClass('hidden');
//      $('#kb-container').html('');
//    kbs.viewport.kenburnIt({
//      images: [
//        "assets/img/home/0.jpg",
//        "assets/img/home/1.jpg",
//        "assets/img/home/2.jpg",
//        "assets/img/home/3.jpg"
//      ],
//      zoom: 1.2,
//      duration: 10
//    });
    $('.ad-mnu').removeClass('in').siblings('#top-mnu').addClass('in');
  });
  
  $('#ad-mnu .diamond').hover(function (e) {
    if (e.type == 'mouseenter')
      $('#ad-mnu .tag').text($(this).data('tag') != undefined ? $(this).data('tag') : '');
    else
      $('#ad-mnu .tag').text('');
  });
  $('.main-mnu').on('click', function () {
    $('#ad-mnu').addClass('in');
  });

  setTimeout(function(){
    $('#top-mnu').addClass('open').find('.diamond').not(':first').addClass('in');
  }, 1000);
  
//  $('.out-dmnd').mouseover(function(){
//     $(this).find('img').attr('src', 'assets/img/logo_kcr1.png'); 
//  });
//  $('#top-mnu section').mouseleave(function(){
//     $(this).find('img').attr('src', 'assets/img/logo_kcr.png'); 
//  });

  /* Gallery */
  if(window.location.pathname !== ''){
  $(document).mouseup(function(e){
      var mnu = $('#ad-mnu');
      if(e.target.id != mnu.attr('id')){
          $('#ad-mnu').removeClass('in');
      }
  });
  }
  $('.demo').on('click', '.diamond-box-wrap', function () {
    $(this).addClass('active');
    var img = new Image();
    img.src = $(this).find('img').attr('src').replace('/thumb', '/large');
    $('#prw').addClass('open').find('section .img').html(img);
    scaleImages();
  });

  $('#prw').on('click', 'a', function (e) {
    e.preventDefault();
    $(this).parent().removeClass('open');
  });

  $('#prw').on('click', '.nxt, .prv', function () {
    var imgs = $('#gallery .demo').find('.diamond-box-wrap');
    var trgt = $('#gallery .demo').find('.diamond-box-wrap.active');
    var indx = $(this).hasClass('nxt') ? imgs.index(trgt) + 1 : imgs.index(trgt) - 1;
    if (($(this).hasClass('nxt') ? imgs.length > indx : indx >= 0))
    {
      var img = new Image();
      img.src = $(imgs[indx]).find('img').attr('src').replace('/thumb', '/large');
      $('#prw section').find('.img').html(img);
      setTimeout(function () {
        scaleImages();
      }, 0);
      trgt.removeClass('active');
      $('#gallery .demo').find('.diamond-box-wrap:eq(' + indx + ')').addClass('active');
    }
  });

  function scaleImages()
  {
    var par = $('#prw section').find('.img');
    var img = par.find('img'), div_height = par.outerHeight(),
            div_width = par.outerWidth(), img_width = img[0].naturalWidth;
    var img_height = img[0].naturalHeight;
    var max_side = Math.max(img_width, img_height);
    var scale = (max_side == img_height) ? img_height / div_height : img_width / div_width;
    var new_width = 0;
    var new_height = 0;
    var top = 0;
    var left = 0;
    if (max_side == img_height)
    {
      new_width = img_width / scale;
      new_height = img_height / scale;
      top = 0;
      left = Math.round((div_width - new_width) / 2);
    }
    else
    {
      new_height = img_height / scale;
      new_width = img_width / scale;
      top = Math.round((div_height - new_height) / 2);
      left = 0;
    }
    img.css({
      'width': new_width,
      'height': new_height,
      'top': top,
      'left': left
    });
    img.addClass('in');
  }

$('#cnt-send').click(function(e){
    e.preventDefault();
    var mail = $('#contact-email').val();
    var name = $('#name').val();
    var subject = $('#subject').val();
    var message = $('#message').val();
    
    $.ajax({
        url: '/images.php',
        type:'post',
        data:{
            mail: mail,
            name: name,
            sub: subject,
            msg: message
        },
        success: function(d){
            alert('We Received your Message');
        }
    })

});



});