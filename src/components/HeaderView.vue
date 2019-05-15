<template>
  <header>
    <div class="limited-width" style="position: relative; height:100%">
      <div class="flex-space-between">
        <div>
          <router-link :to="{ name: 'index'}">
            <img class="logo" src="@/assets/logo.png">
          </router-link>
        </div>
        <div class="nav flex-right-align">
          <a href="https://hicto.tech" class="item">关于 HiCTO</a>
          <a href="https://hicto.tech/#team" class="item">团队</a>
          <a href="https://hicto.tech/#cases" class="item">案例</a>
          <a href="https://hicto.tech/#funds" class="item">合作</a>
          <a href="mailto:bd@ctofunds.com" class="item">联系我们</a>
          <a href="https://hicto.tech" class="item active">服务</a>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  height: 80px;
  line-height: 80px;

}
header .logo {
  vertical-align: middle;
}
header .title {
  color: #fff;
  font-size: 30px;
}

header .nav .item {
  color: #fff;
  opacity: 0.5;
  font-size: 15px;
  font-weight: 600;
  margin-left: 50px;
}
header .nav .active {
  opacity: 1;
  color: #fff;
}

/* mobile */
@media screen and (max-width: 700px) {
  .nav {
    display: none;
  }
}
</style>
