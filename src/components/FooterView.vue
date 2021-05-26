<template>
  <div class="footer">
    <div class="limited-width flex-space-between" style="align-items:flex-start;">
      <div class="left flex-left-align" style="align-items:flex-start;">
        <img class="logo" src="@/assets/logo.png">
        <div class="info">
          <div class="text">上海市徐汇区华山路1901号国贸汇A座9层</div>
          <div class="text">上海上马石网络科技有限公司</div>
          <div class="text" style="margin-top:30px;">
           © 2015 – 2021, HiCTO,  <a href="https://beian.miit.gov.cn/" target="_blank">沪ICP备19012594号-1</a></div>
        </div>
      </div>
      <div style="text-align:right">
        <div class="text">联系我们</div>
        <div class="text">bd@ctofunds.com</div>
        <div class="text">berner.lin@ctofunds.com</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer {
  background-color: #04304C;
  color: #fff;
  height: 200px;
  padding: 50px 0px;
}
.logo {
  margin-right: 60px;
}
.text {
  margin-bottom: 8px;
}

/* mobile */
@media screen and (max-width: 700px) {
  .info {
    display:none;
  }
}
</style>
