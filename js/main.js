$(document).ready(function() {
    $(".news__slider.owl-carousel").owlCarousel({
        dots: true,
        margin: 10,
        center: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1,
                center: false,
            },
            1000:{
                items:3
            }
        }
    });

    $(".prices__list.owl-carousel").owlCarousel({
        dots: true,
        margin: 10,
        center: true,
        loop: true,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            600:{
                items:1,
                center: false,
            },
            1000:{
                items:3
            }
        }
    });
    
    // $('.dir_menu_list').click(function() {
    //     $('.hide_links').removeClass('hide')
    // })

    // $('.dir_menu_list').click(function() {
    //     $('.hide_links').removeClass('hide')
    // })

    // $(document).mouseup( function(e){ // событие клика по веб-документу
	// 	let menuWrap = $(".hide_links"); // тут указываем ID элемента
	// 	if ( !menuWrap.is(e.target)) { // и не по его дочерним элементам
	// 		menuWrap.addClass('hide') // скрываем его
	// 	}
	// });

    $(".menuToggle").click(function() {
        $(this).toggleClass("active");
        $('.header_top__ul').slideToggle(300, function(){
          if($(this).css('display') === "none"){
            $(this).removeAttr('style');
          }
        });
      });
    
    $('.header_top__item>a').click(function () {
        $(".menuToggle").toggleClass("active")
        $('.header_top__ul').slideToggle(300, function(){
            if($(this).css('display') === "none"){
              $(this).removeAttr('style');
            }
          });
    })

    $('.faq__content_item_showed').click(function () {
        $(this).next().toggleClass('hide');
        $(this).children('img').toggleClass('reverse')
    })

    $(window).scroll(function() {
        if($(this).scrollTop() > 0) {
            $('.header_top').addClass('stickytop');
            $('.header_top_plac').css({
                height: 79,
                marginBottom: 175
            });
            $('.hamburger').addClass('scroll_js')
            $('.header_top__logotel').addClass('scroll_top_tel')
        }
        else{
            $('.header_top').removeClass('stickytop');
            $('.header_top_plac').css({
                height: 0,
                marginBottom: 0
            });
            $('.hamburger').removeClass('scroll_js')
            $('.header_top__logotel').removeClass('scroll_top_tel')
        }
    });

    $('.modal_content__close').click(function() {
        $('#modal_video').get(0).pause();
		$(this).parents('.modal_back').hide();
        
		return false;
	});        
 
	// Закрытие по клавише Esc.
	$(document).keydown(function(e) {
		if (e.keyCode === 27) {
			e.stopPropagation();
			$('.modal_back').hide();
            $('#modal_video').get(0).pause();
		}
	});
	
	// Клик по фону, но не по окну.
	$('.modal_back').click(function(e) {
		if ($(e.target).closest('.modal_content').length == 0) {
			$(this).hide();
            $('#modal_video').get(0).pause();					
		}
	});

    $('.invite__content_right_inv_btn').click(function() {
		$('.modal_back').show();
		return false;
	});
});