$(function(){
    //windowがスクロールされる度に発火
    $(window).scroll(function (){
        //それぞれのfadeInUpというクラスがついた要素に対して実行
        $('.fadeIn').each(function(){
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            const elemPos = $(this).offset().top; //thisにはeachで現在処理されている要素が入る
            if (scroll > elemPos - windowHeight + 200){
                $(this).addClass('scrollIn');
            }
        });
    });
});