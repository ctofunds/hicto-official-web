<template>
  <header v-bind:class="{ solid: !isScrollToTop }">
    <div class="limited-width" style="position: relative; height:100%">
      <div class="flex-space-between">
        <div>
          <router-link :to="{ name: 'index'}">
            <img class="logo" src="@/assets/logo.png">
          </router-link>
        </div>
        <div class="nav flex-right-align">
          <div class="dropdown about" @mouseleave="showIndexMenu=false">
            <div class="name flex-space-between" @mouseenter="showIndexMenu=true" @click="showIndexMenu =! showIndexMenu">
              <span>关于HiCTO</span>
              <img class="arrow" src="@/assets/arrow.png">
            </div>
            <div class="dropdown-menu" v-show="showIndexMenu">
              <router-link to="/#team">
                <div class="dropdown-item">核心团队</div>
              </router-link>
              <router-link to="/#projects">
                <div class="dropdown-item">赋能项目</div>
              </router-link>
              <router-link to="/#funds">
                <div class="dropdown-item">合作机构</div>
              </router-link>
            </div>
          </div>
          <div class="dropdown" @mouseleave="showServiceMenu=false">
            <div class="name flex-space-between" @mouseenter="showServiceMenu=true" @click="showServiceMenu =! showServiceMenu">
              <span>业务类型</span>
              <img class="arrow" src="@/assets/arrow.png">
            </div>
            <div class="dropdown-menu" v-show="showServiceMenu">
              <router-link :to="{ name: 'service', params:{key: 'venture'}}">
                <div class="dropdown-item">Venture创投</div>
              </router-link>
              <router-link :to="{ name: 'service', params:{key: 'accelerator'}}">
                <div class="dropdown-item">Accelerator加速</div>
              </router-link>
              <router-link :to="{ name: 'service', params:{key: 'innovation'}}">
                <div class="dropdown-item">Innovation创新</div>
              </router-link>
            </div>
          </div>
          <div class="dropdown" @mouseleave="showOnlineServiceMenu=false">
            <div class="name flex-space-between" @mouseenter="showOnlineServiceMenu=true" @click="showOnlineServiceMenu =! showOnlineServiceMenu">
              <span>在线服务</span>
              <img class="arrow" src="@/assets/arrow.png">  
            </div>
            <div class="dropdown-menu" v-show="showOnlineServiceMenu">
              <router-link :to="{ name: 'onlineService', params:{key: 'consulting'}}">
                <div class="dropdown-item">轻咨询服务</div>
              </router-link>
              <router-link :to="{ name: 'onlineService', params:{key: 'interview'}}">
                <div class="dropdown-item">面试服务</div>
              </router-link>
            </div>
          </div>
          <div class="dropdown contact">
            <a href="mailto:berner.lin@ctofunds.com" class="name">联系我们</a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrollToTop: true,
      showIndexMenu: false,
      showServiceMenu: false,
      showOnlineServiceMenu: false
    };
  },
  methods: {
    showForm() {
      ysf("open");
    },
    handleScroll (event) {
      this.isScrollToTop = (window.scrollY == 0)
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
<style scoped>
header {
  background-color:transparent;
  height: 80px;
  line-height: 80px;
  position: fixed;
  z-index: 1;
  top:0px;
  left: 0px;
  right: 0px;
  z-index: 1000;
}
.solid {
  background-color: #04304C;
  transition: background-color 0.6s;
}
header .logo {
  vertical-align: middle;
}
header .title {
  color: #fff;
  font-size: 30px;
}


header .nav .active {
  opacity: 1;
  color: #fff;
}

.arrow {
  width:24px;
  height:24px;
}

.dropdown {
  position: relative;
  color: #fff;
  cursor: pointer;
  margin-left: 40px;
}

.dropdown-menu {
  padding: 5px 20px;
  position: absolute;
  background-color: rgba(6,84,121, 0.9);
  border-radius: 10px;
  top: 70px;
  left: -30px; 
  width: 160px;
}

.dropdown-item {
  font-size: 16px;
  color: #fff;
  line-height:40px;
}

/* mobile */
@media screen and (max-width: 700px) {
  .dropdown {
    margin-left:20px;
  }
   .contact, .about {
    display: none;
  }
}
</style>
