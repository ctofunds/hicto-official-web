<template>
  <div>
    <header-view style="background-color: #083272;"/>
    <section ctio class="top" style="padding-top:10px;">
      <div class="limited-width" style="position: relative; height:100%">
        <div class="title">{{service.name}}</div>
        <!-- <div class="title">百亿美金上市公司CTO及BAT技术专家帮您把关</div> -->
        <div class="tabs">
          <router-link :to="{ name: 'onlineService', params:{key: 'consulting'}}">
            <div class="tab" v-bind:class="{ active: service.key == 'consulting'}">技术轻咨询</div>
          </router-link>
          <router-link :to="{ name: 'onlineService', params:{key: 'deep_service'}}">
            <div class="tab" v-bind:class="{ active: service.key == 'deep_service'}">技术深度服务</div>
          </router-link>
          <router-link :to="{ name: 'onlineService', params:{key: 'interview'}}">
            <div class="tab" v-bind:class="{ active: service.key == 'interview'}">面试服务</div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="body">
      <div class="limited-width">
        <div class="info">共 {{service.products.length}}个 服务</div>
        <div class="product-list flex-space-between">
          <div class="card" v-for="product in service.products">
            <router-link
              :to="{ name: 'product', params:{serviceKey: service.key, productCode: product.code}}"
            >
              <product-card :product="product" :service-name="service.name"/>
            </router-link>
          </div>
        </div>
      </div>
    </section>
    <footer-view/>
  </div>
</template>

<script>
import ProductCard from "@/components/ProductCard";
import HeaderView from "@/components/HeaderView";
import FooterView from "@/components/FooterView";
import data from "@/libs/data";

export default {
  components: { ProductCard, FooterView, HeaderView },
  data() {
    return {
      service: {}
    };
  },
  created() {
    this.refresh();
  },
  watch: {
    $route: "refresh"
  },
  methods: {
    refresh() {
      this.service = data.getService(this.$route.params.key || "consulting");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
  background-color: #083272;
}
.top .title {
  color: #fff;
  font-size: 30px;
  margin: 5px 0px;
}

.tabs {
  margin-top: 20px;
  display: flex;
  justify-content: left-align;
  font-weight: 600;
  color: #ffffff;
}

.tabs .tab {
  padding: 30px 0px;
  opacity: 0.4;
  margin-right: 30px;
}

.tabs .active {
  opacity: 1;
  border-bottom: 4px solid #fff;
}

.body {
  background-color: #f5f7fa;
  padding-bottom: 100px;
}
.body .info {
  font-size: 15px;
  height: 100px;
  line-height: 100px;
}

.product-list {
  flex-wrap: wrap;
}
.product-list .card {
  width: 30%;
  margin-bottom: 5%;
}

/* mobile */
@media screen and (max-width: 700px) {
  .product-list .card {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
