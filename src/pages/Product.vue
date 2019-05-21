<template>
  <div>
    <header-view style="background-color:  #04304C"/>
    <section class="body">
      <div class="limited-width flex-space-between" style="align-items:flex-start; flex-wrap:wrap">
        <section class="main">
          <div class="bread-crumbs">
            <router-link :to="{ name: 'onlineServiceHome'}">
              <span class="path">服务</span>
            </router-link>
            <span class="arrow">></span>
            <router-link :to="{ name: 'onlineService', params: {key: service.key}}">
              <span class="path">{{service.name}}</span>
            </router-link>
            <span class="arrow">></span>
            <span class="path active">{{product.title}}</span>
          </div>
          <div class="product-title">{{product.title}}</div>
          <div class="product-img ratio-16_9">
            <div class="ratio-16_9-content">
              <img :src="product.bg">
              <div class="black-mask"></div>
              <div class="cover">
                <div class="title centered-text">{{product.title}}</div>
              </div>
            </div>
          </div>
          <div v-show="product.introduction" class="product-desc" style="margin-bottom:20px;">
            <p v-for="text in product.introduction" v-html="text"></p>
          </div>
          <div class="product-desc">
            <p v-for="text in service.introduction" v-html="text"></p>
          </div>
        </section>
        <section class="side">
          <div>顾问</div>
          <div v-for="consultant in product.consultants">
            <div class="seperator-line"></div>
            <consultant-card :consultant="consultant" class="consultant" v-on:chosen="showForm()"/>
          </div>
        </section>
      </div>
    </section>
    <footer-view/>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import FooterView from "@/components/FooterView";
import ConsultantCard from "@/components/ConsultantCard";
import data from "@/libs/data";

export default {
  components: { HeaderView, FooterView, ConsultantCard },
  data() {
    return {
      service: data.getService(this.$route.params.serviceKey),
      product: data.getProduct(
        this.$route.params.serviceKey,
        this.$route.params.productCode
      )
    };
  },
  methods: {
    showForm() {
      ysf("open");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  padding-top: 120px;
  background-color: #f5f7fa;
  padding-bottom: 100px;
}
.main {
  width: 65%;
}
.side {
  width: 30%;
}

.bread-crumbs a,
span {
  font-size: 15px;
  font-weight: 600;
  color: #85909e;
}
.bread-crumbs span {
  display: inline-block;
  margin-right: 15px;
  margin-bottom: 5px;
}
.bread-crumbs .path {
  cursor: pointer;
}
.bread-crumbs .arrow {
  font-size: 10px;
}
.bread-crumbs .active {
  color: #126eff;
}

.product-title {
  margin: 20px 0px;
  font-size: 42px;
  font-weight: 300;
  color: #162944;
}

.product-img img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.product-img .small-title {
  color: #126eff;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
}
.product-img .cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.product-img .cover .logo {
  width: 200px;
  height: auto;
}
.product-img .cover .title {
  font-size: 40px;
  font-weight: 600;
  color: #fff;
}

.product-desc {
  margin-top: 40px;
  font-size: 16px;
  line-height: 2;
  color: #162944;
}

.side .seperator-line {
  background-color: #e4ecf0;
  margin: 10px 0px;
}

.consultant {
  margin: 40px 0px;
}

/* mobile */
@media screen and (max-width: 700px) {
  .bread-crumbs span {
    display: inline-block;
    margin-right: 5px;
  }
  .main {
    width: 100%;
  }
  .side {
    padding-top: 50px;
    width: 100%;
  }
}
</style>
