<!--
 * @Description: 
 * @Autor: Huang Yingming
 * @LastEditors: Huang Yingming
 * @LastEditTime: 2021-08-30 20:34:32
-->
<template>
  <div>
    <el-alert
      :title="'当前房间密钥：' + key.toString()"
      center
      :closable="false"
    ></el-alert>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";

export default {
  data() {
    return {
      key: "",
    };
  },
  sockets: {
    createRoom(msg) {
      JSON.parse(JSON.stringify(msg));
      this.key = msg.key;

      let div = document.createElement("div");

      div.style = "display: flex; justify-content: center;";

      let a = new QRCode(div, {
        text: this.key,
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H,
      });

      setTimeout(() => {
        this.$alert(div.outerHTML, "二维码连接", {
          dangerouslyUseHTMLString: true,
          center: true,
          showClose: false,
          showCancelButton: false,
          closeOnClickModal: false,
          closeOnPressEscape: false,
          closeOnHashChange: false,
        });
      }, 500);

      // let img = document.createElement("img");
      // img.src = "https://scpic.chinaz.net/files/pic/pic9/202108/apic34806.jpg";

      // setTimeout(() => {

      // }, 500);
    },
  },
};
</script>

<style>
</style>