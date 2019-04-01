<template>
  <header>
    <div class="limited-width" style="position: relative; height:100%">
      <div class="flex-space-between">
        <div style="disp">
          <img class="logo" src="@/assets/logo.png">
        </div>
        <div class="nav flex-right-align">
          <div class="item">关于 HiCTO</div>
          <div class="item">团队</div>
          <div class="item">案例</div>
          <div class="item">合作</div>
          <div class="item">联系我们</div>
          <div class="item active">服务</div>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  height: 80px;
  line-height: 80px;
  background-color: #083272;
}
header .logo{
  vertical-align: middle;
}
header .title {
  color: #fff;
  font-size: 30px;
}

header .nav .item {
  color: #85909e;
  font-size: 15px;
  font-weight: 600;
  margin-left: 50px;
}
header .nav .active {
  color: #fff;
}

/* mobile */
@media screen and (max-width: 700px) {
  .nav {
    display: none;
  }
}
</style>
