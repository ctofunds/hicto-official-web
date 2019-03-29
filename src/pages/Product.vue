<template>
  <div>
    <section class="top">
      <div class="limited-width" style="position: relative; height:100%">
        <header class="flex-space-between">
          <img class="logo" src="@/assets/logo-dark.jpg">
          <div class="nav flex-right-align">
            <div class="item">关于 HiCTO</div>
            <div class="item">团队</div>
            <div class="item">案例</div>
            <div class="item">合作</div>
            <div class="item">联系我们</div>
            <div class="item active">服务</div>
          </div>
        </header>
      </div>
    </section>
    <section class="body">
      <div class="limited-width flex-space-between" style="align-items:flex-start">
        <section class="main">
          <div class="bread-crumbs">
            <router-link :to="{ name: 'serviceHome'}">
              <span class="path">服务</span>
            </router-link>
            <span class="arrow">></span>
            <router-link :to="{ name: 'service', params: {key: service.key}}">
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
                <img class="logo centered" src="@/assets/logo.png">
                <div class="title centered-text">面试服务</div>
              </div>
            </div>
          </div>
          <div class="product-desc">
            <p>技术合伙人已经是创业的标准配置，但是优秀的技术合伙人凤毛菱角，我们应该从那些渠道去寻找技术合伙人？</p>
            <p>又应该从哪些方面去判断一个技术合伙人是否具备能力和素质，可以陪伴企业成长呢？</p>
            <p>服务流程为：</p>
            <p>1. 服务以1小时为单位，填写联系方式，并支付费用，支付完成后，HiCTO会尽快联系您，您也可以直接联系HiCTO，我们会帮您安排时间，确定双方都方便的时间。</p>
            <p>2. 时间确认后，双方线上沟通或者线下见面。</p>
            <p>3. 最后双方确认服务达成。</p>
          </div>
        </section>
        <section class="side">
          <div>顾问</div>
          <div class="seperator-line"></div>
          <consultant-card class="consultant" v-on:chosen="showForm()"/>
          <div class="seperator-line"></div>
          <consultant-card class="consultant" v-on:chosen="showForm()"/>
        </section>
      </div>
    </section>
    <footer-view/>
  </div>
</template>

<script>
import FooterView from "@/components/FooterView";
import ConsultantCard from "@/components/ConsultantCard";
import data from "@/libs/data";

export default {
  components: { FooterView, ConsultantCard },
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
      ysf('open')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  height: 150px;
  background-color: #f5f7fa;
}
.top .title {
  color: #fff;
  font-size: 30px;
}

header {
  height: 80px;
}
header .nav .item {
  color: #85909e;
  font-size: 15px;
  font-weight: 600;
  margin-left: 50px;
}
header .nav .active {
  color: #162944;
}

.body {
  background-color: #f5f7fa;
  padding-bottom: 100px;
}
.main {
  width: 65%;
}
.side {
  width: 30%;
}

.bread-crumbs a, span{
  font-size: 15px;
  font-weight: 600;
  color: #85909e;
}
.bread-crumbs span {
  display: inline-block;
  margin-right: 20px;
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
  font-size: 45px;
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

.product-img .cover .logo {
  width: 200px;
  height: auto;
  margin-top: 18%;
  margin-bottom: 5%;
}
.product-img .cover .title {
  font-size: 37.5px;
  font-weight: 600;
  color: #fff;
}

.product-desc {
  margin-top: 40px;
  font-size: 15px;
  line-height: 2.2;
  color: #162944;
}

.side .seperator-line {
  background-color: #e4ecf0;
  margin: 10px 0px;
}

.consultant {
  margin: 40px 0px;
}
</style>
