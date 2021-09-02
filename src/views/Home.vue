<template>
  <!-- 视频播放主要界面 -->
  <div class="home">
    <!-- <ms-video msg="@/components/Video.vue"></ms-video> -->
    <video-play></video-play>
  </div>
</template>

<script>
// @ is an alias to /src
// import Video from "@/components/Video.vue";
import VideoPlay from "../components/VideoPlay.vue";

export default {
  name: "Home",
  components: {
    // msVideo: Video,
    VideoPlay,
  },
};
</script>

<style scoped>
</style>
