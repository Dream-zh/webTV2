<template>
  <div class="download">
    <ms-download msg="@/components/Download.vue"></ms-download>
  </div>
</template>

<script>
import Download from "@/components/Download.vue";

export default {
  name: "Download",
  components: {
    msDownload: Download,
  },
};
</script>

<style lang="less">
</style>