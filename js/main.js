
function upView(contentName){
  let $contentName = $(contentName);
  let contentOffset = $contentName.offset().top;
  let eventClassName = '.up-view';
  eventScrollClassOnOff($contentName,contentOffset,eventClassName);
}

function flyItem(contentName){
  let $contentName = $(contentName);
  let contentOffset = $contentName.offset().top;
  let eventClassName = '.fly-item';
  eventScrollClassOnOff($contentName,contentOffset,eventClassName);
}


function contentAddRemoveClassOn(contentName){
  let $contentName = $(contentName);
  let contentOffset = $contentName.offset().top;
  $(window).on('scroll',function(){
    scrollTop = $(window).scrollTop();
    if(scrollTop > contentOffset - (winH/2)){
        $contentName.addClass('on');
    }else{
        $contentName.removeClass('on');
    }
});
}

function eventScrollClassOnOff($contentName,contentOffset,className){
  $(window).on('scroll',function(){
    scrollTop = $(window).scrollTop();

    if(upView){
      if(scrollTop > contentOffset - (winH/2)){
        $contentName.find(className).addClass('on');
      }else{
        $contentName.find(className).removeClass('on');
      }
    }
});
}