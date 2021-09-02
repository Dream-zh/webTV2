<!--
 * @Description: 
 * @Autor: Huang Yingming
 * @LastEditors: Huang Yingming
 * @LastEditTime: 2021-09-01 16:18:13
-->
<template>
  <div>
    <top-tip id="topTip"></top-tip>
    <video
      src=""
      autoplay="autoplay"
      loop="loop"
      muted="muted"
      controls="controls"
      controlsList="nodownload"
      id="video"
      @mouseenter="enter"
      @mouseleave="leave"
    ></video>
  </div>
</template>

<script>
import TopTip from "./TopTip.vue";
export default {
  components: { TopTip },
  name: "VideoPlay",
  sockets: {
    switchoverChannel(msg) {
      let video = document.getElementById("video");
      msg = JSON.parse(JSON.stringify(msg));
      console.log(video);
      video.src = msg.src;
    },
    switchoverVolume(msg) {
      let video = document.getElementById("video");
      msg = JSON.parse(JSON.stringify(msg));
      if (msg.setting == "+" && video.volume < 1) video.volume += 0.1;
      if (msg.setting == "-" && video.volume > 0.1) video.volume -= 0.1;
    },
    switchoverPlay(msg) {
      let video = document.getElementById("video");
      msg = JSON.parse(JSON.stringify(msg));
      if (video.paused == true) video.play();
      else video.pause();
    },
    switchoverPlayRate(msg) {
      let video = document.getElementById("video");
      msg = JSON.parse(JSON.stringify(msg));
      video.playbackRate = msg.playbackRate;
    },
    switchoverPlayPlace(msg) {
      let video = document.getElementById("video");
      msg = JSON.parse(JSON.stringify(msg));
      if (msg.setting == "+") {
        video.currentTime = video.currentTime + 5;
      } else {
        video.currentTime = video.currentTime - 5;
      }
    },
  },
  methods: {
    enter() {
      document.getElementById("topTip").style.top = "0";
    },
    leave() {
      document.getElementById("topTip").style.top = "-5%";
    },
  },
};
</script>

<style>
#video {
  height: 100vh;
  width: 100vw;
}

#topTip {
  width: 100vw;
  z-index: 1;
  transition: all 0.5s;
  top: -5%;
  position: fixed;
}
</style>