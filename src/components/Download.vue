<template>
  <div class="download">
    <!-- 背景图 -->
    <div class="download__bg"></div>
    <!-- 文字 -->
    <div class="download__text download__text--changer">
      投屏总是无法连接，饱受折磨？
    </div>
    <div class="download__text2 download__text--changer2">
      电脑连接电视切换视频，还需要离开舒适的沙发？
    </div>
    <div class="download__text3 download__text--changer3">
      赶快扫描下方二维码，下载与本站配套手机遥控器，体验随心随地的自由操作吧！
    </div>
    <!-- 二维码下载 -->
    <div class="download__qr download__qr--changer"></div>
  </div>
</template>

<style lang="less">
.download {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  .download__qr {
    position: absolute;
    top: 50%;
    left: 30%;
    width: 150px;
    height: 150px;
    opacity: 0;
    background-image: url("../assets/img/qr.png");
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .download__qr--changer {
    animation: grow7 2.5s steps(60) 9s normal both;
  }
  @keyframes grow7 {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  // 背景图
  .download__bg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: url("../assets/img/bg-app.jpg");
    background-position: top center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }
  //文字
  .download__text {
    position: absolute;
    color: #fba414;
    top: 10%;
    left: 20%;
    font-size: 28px;

    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    z-index: 1;
  }
  .download__text2 {
    position: absolute;
    color: #fba414;
    top: 20%;
    left: 30%;
    font-size: 28px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    z-index: 1;
  }
  .download__text3 {
    position: absolute;
    color: #fba414;
    top: 30%;
    left: 6%;
    font-size: 28px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    z-index: 1;
  }
  //文字动画
  .download__text--changer {
    animation: grow 2.5s steps(60) 1s normal both;
  }
  @keyframes grow {
    from {
      width: 0;
    }
    to {
      width: 390px;
    }
  }
  .download__text--changer2 {
    animation: grow2 3s steps(60) 4s normal both;
  }
  @keyframes grow2 {
    from {
      width: 0;
    }
    to {
      width: 600px;
    }
  }
  .download__text--changer3 {
    animation: grow3 6s steps(60) 7s normal both;
  }
  @keyframes grow3 {
    from {
      width: 0;
    }
    to {
      width: 1000px;
    }
  }
}
</style>