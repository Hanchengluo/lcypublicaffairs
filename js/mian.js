// search
// $(function(){
//   $("#searchSelected").click(function(){
//     $("#searchTab").show();
//     $(this).addClass("searchOpen");
//   });

//   $("#searchTab li").hover(function(){
//     $(this).addClass("selected");
//   },function(){
//     $(this).removeClass("selected");
//   });

//   $("#searchTab li").click(function(){
//     $("#searchSelected").html($(this).html());
//     $("#searchTab").hide();
//     $("#searchSelected").removeClass("searchOpen");
//   });
// });
// banner

// tab
$(function() {
  function tabs1(tabTit, on, tabCon) {
    $(tabCon).each(function() {
      $(this).children().eq(0).show();
    });
    $(tabTit).each(function() {
      $(this).children().eq(0).addClass(on);
    });
    $(tabTit).children().hover(function() {
      $(this).addClass(on).siblings().removeClass(on);
      var index = $(tabTit).children().index(this);
      $(tabCon).children().eq(index).show().siblings().hide();
    });
  }
  tabs1(".tab-dw-h", "v-nav-active", ".tab-gk-h");
});


// marquee
$(function() {
        $('#roll-banner-marquee').marquee({
            auto: false,
            speed: 500,
            showNum: 9,
            stepLen: 1,
            type: 'vertical',
            prevElement: $('#roll-banner-next'),
            nextElement: $('#roll-banner-prev')
        });
    });
// form tip
// $('.register-second-tip').poshytip({
//   showOn: 'focus',
//   alignTo: 'target',
//   alignX: 'right',
//   alignY: 'center',
//   offsetX: 12,
//   showTimeout: 100
// });
$(function() {
        $('#roll-vd-marquee').marquee({
            auto: false,
            speed: 500,
            showNum: 3,
            stepLen: 1,
            type: 'horizontal',
            prevElement: $('#roll-vd-next'),
            nextElement: $('#roll-vd-prev')
        });
    });