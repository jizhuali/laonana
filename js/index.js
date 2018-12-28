// 初始化SWIPER，基于一些参数配置实现滑屏的效果
var mySwiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  loop: true,
  on: {
    init: function () {
      swiperAnimateCache(this); //隐藏动画元素 
      swiperAnimate(this); //初始化完成开始动画
    },
    slideChangeTransitionEnd: function () {
      swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
      //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
    }
  }
});
// 处理音乐
~ function () {
  var musicBox = document.querySelector('.musicBox'),
    musicAudio = document.querySelector('#musicAudio');
  function musicPlay() {
    musicAudio.play();
    musicBox.className = 'musicBox move';
    //能播放了之后移除触屏后播放事件
    document.removeEventListener("touchstart",musicPlay,false);
  }
  // 一加载页面就开始播放
  musicPlay();
  //为了解决ios手机微信端对于音乐的自动播放存在Bug，经常没声音
  document.addEventListener("weixinJSBridgeReady",musicPlay,false);
  document.addEventListener("touchstart",musicPlay,false);

  // 点击控制播放
  musicBox.onclick = function () {
    // 如果当前为暂停状态
    if (musicAudio.paused) {
      musicPlay();
      return;
    }
    //设置暂停
    musicAudio.pause();
    musicBox.className = 'musicBox';
  };

}();