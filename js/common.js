$(document).ready(function() {
    initDom();
    

    /* header , gnb */
    $toggleBtn.on('mousedown',function(event){
        $(this).closest('.item').siblings('.item').find('.toggle').removeClass(class_on);
        $(this).closest('.item').siblings('.item').find('.item-layer').removeClass(class_on);
        $(this).toggleClass(class_on);
        $(this).siblings('div').toggleClass(class_on);

    }).on('focusin',function(e){
        $(this).closest('.item').siblings('.item').find('.toggle').removeClass(class_on);
        $(this).closest('.item').siblings('.item').find('.item-layer').removeClass(class_on);
        $(this).addClass(class_on);
        $(this).siblings('div').addClass(class_on);
    }).on('keyup',function(e){
        if(e.keyCode == 13){        
            $(this).toggleClass(class_on);
            $(this).siblings('div').toggleClass(class_on);
        }
    });

    $headerLogo.on('focusin',function(){
        $toggleBtn.removeClass(class_on);
        $toggleLayer.removeClass(class_on);
    });
   
    $toggleClose.on('click',function(){
        $(this).closest('.item-layer').removeClass(class_on);
        $(this).closest('.item-layer').siblings('.toggle').removeClass(class_on);
    });
    $menuHover.on('mouseenter focusin',function(){
        $(this).closest('.menu-hover').siblings('.menu-hover').find('a').removeClass(class_on);
        $(this).closest('.menu-hover').siblings('.menu-hover').find('.item-layer-menu').css('display','none');
        $(this).siblings('.item-layer-menu').css('display','block');
        $(this).addClass(class_on);
    });
    $menuHoverArea.on('mouseleave',function(){
        $(this).find('.item-layer-menu').css('display','none');
        
    });
    $headerTitleLogo.on('focusin',function(){
        $menuLayer.css('display','none');
        $menuHover.removeClass(class_on);
    });
    $('.menu-list li:last-child a').addClass('la').on('focusout',function(){
        $(this).closest('.item-layer-menu').css('display','none');
    });


    /* footer */
    $footerSelect.on('click',function(){
        let conH = $(this).siblings('.btn-select-box-inner').outerHeight();
        $(this).siblings('.btn-select-box-inner').addClass(class_on);
        if(conH >= winH){
            $(this).siblings('.btn-select-box-inner').css({
                'height':winH
            });
        }
    });
    $footerSelectClose.on('click',function(){
        $(this).closest('.btn-select-box-inner').removeClass(class_on);
    });

    $btnGoTop.on('click',function(){
        $('html,body').stop().animate({scrollTop: '0'}, 400);
        $('header .logo-title').focus();
        return false;
    });


});

//dom
let class_on;
let winH;
let $headerLogo,$headerTitleLogo;
let $menuLayer,$menuHover,$menuHoverArea,$menuLast;
let $toggleBtn,$toggleClose,$toggleLayer;

let $footerSelect,$footerSelectClose;
let $btnGoTop;

const initDom = () => {
    winH = $(window).outerHeight();
    class_on = 'on';
    $headerLogo = $('.logo-eduwill');
    $headerTitleLogo = $('.logo-title');
    $toggleBtn = $('.toggle');
    $toggleLayer = $('.item-layer');
    $toggleClose = $('.item-layer-close');
    $menuLayer = $('.item-layer-menu');
    $menuHoverArea = $('.menu-hover');
    $menuHover = $('.menu-hover > a');
    $menuLast = $('.menu-list .la');

    $footerSelect = $('#footer .btn-select');
    $footerSelectClose = $('#footer .btn-select-box-inner .close');
    $btnGoTop = $('#footer .btn-gotop');
}