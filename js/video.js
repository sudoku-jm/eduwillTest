$(document).ready(function() {
    videoDom();

    //합격자 후기 비디오 메뉴&썸네일 
    $videoThumBtn.addClass(class_on).find('img').attr({'src':videoList[0].videoThum,'alt':videoList[0].alt});

    $videoNavList.on('click',function(){
        tabIndex = $(this).index();
        videoTabClickEvent(tabIndex);
    });

    $videoNavList.on('focusin',function(){
        tabIndex = $(this).index();
        videoTabClickEvent(tabIndex);

    });
    $videoThumBtn.on('click',function(){
        $videoPlayer.get(0).pause();
        $(this).siblings('video').addClass(class_on).get(0).play();
        $(this).removeClass(class_on);
    });

});


let $videoPlayerWrap,$videoPlayer,$videoThumBtn,$videoNavList,videoList;

function videoDom(){
    $videoPlayerWrap = $('.video-player-wrap');
    $videoPlayer = $videoPlayerWrap.find('video');
    $videoThumBtn = $videoPlayerWrap.find('.btn-play');
    $videoNavList = $('.video-nav li');
    videoList = [
        {"videoSrc" : "https://pmp.eduwill.net/eduwillpmp/eduwill/flv/20210219/land_interview_jga.mp4" , "videoThum" : "https://img.eduwill.net/eduwill/img/2021/L/product/210304/pc/thumb_interview2.jpg", "alt" : "140일 만에 합격.40대 경단녀,140일만에 단기 합격한 비결은?"},
        {"videoSrc" : "https://pmp.eduwill.net/eduwillpmp/eduwill/flv/20210219/land_interview_pth.mp4" , "videoThum" : "https://img.eduwill.net/eduwill/img/2021/L/product/210304/pc/thumb_interview1.jpg", "alt" : "합격 후 까지 지원.합격 후까지 생각한다면 당연히 에듀윌!"},
        {"videoSrc" : "https://pmp.eduwill.net/eduwillpmp/eduwill/flv/20210219/land_interview_jga.mp4" , "videoThum" : "https://img.eduwill.net/eduwill/img/2021/L/product/210304/pc/thumb_interview3.jpg", "alt" : "4개월만에 최종합격.교수님만 잘 따라가면 합격!"},
        {"videoSrc" : "https://pmp.eduwill.net/eduwillpmp/eduwill/flv/20210219/land_interview_lwu.mp4" , "videoThum" : "https://img.eduwill.net/eduwill/img/2021/L/product/210304/pc/thumb_interview4.jpg", "alt" : "나이는 숫자에 불과.명예퇴직 후 공인중개사로 찾은 인생 2막!"},
        {"videoSrc" : "https://pmp.eduwill.net/eduwillpmp/eduwill/flv/20210219/land_interview_kkt.mp4" , "videoThum" : "https://img.eduwill.net/eduwill/img/2021/L/product/210304/pc/thumb_interview5.jpg", "alt" : "희귀난치병 극복. 안락사 고민하던 환자의 공인중개사 합격스토리"}];   
}

function videoTabClickEvent(tabIndex){
    $videoNavList.removeClass(class_on);
    $videoNavList.eq(tabIndex).addClass(class_on);
    $videoPlayer.attr('src',videoList[tabIndex].videoSrc);
    $videoThumBtn.addClass(class_on).find('img').attr({'src':videoList[tabIndex].videoThum,'alt':videoList[tabIndex].alt});
}
