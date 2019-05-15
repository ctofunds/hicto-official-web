<template>
  <div class="product">
    <div class="ratio-4_3">
      <div class="ratio-4_3-content">
        <img class="bg" :src="product.bg">
        <div class="black-mask"></div>
        <div class="cover">
          <!-- <img class="logo centered" src="@/assets/logo.png"> -->
          <div class="title centered-text">{{product.title}}</div>
        </div>
      </div>
      <img class="avatar" :src="product.consultants[0].avatar">
    </div>
    <div class="container">
      <div class="small-title">{{serviceName}}</div>
      <div class="title">{{product.title}}</div>
      <div class="seperator-line"></div>
      <div class="price" v-if="product.lowestPrice != 0">￥{{product.lowestPrice}} 起</div>
      <div class="price" v-if="product.lowestPrice == 0">咨询价格</div>
   </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
    serviceName: String
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product {
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
}

.product .bg {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.product .avatar {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  position: absolute;
  right:25px;
  bottom: -20px;
}
.product .small-title {
  color: #126eff;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 5px;
}

.product .cover {
  padding: 0px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product .cover .logo {
  width: 154px;
  height: auto;
  margin-top: 20%;
  margin-bottom: 10%;
}
.product .cover .title {
  font-size: 26px;
  font-weight: 600;
  color: #fff;
}

.product .seperator-line {
  margin: 13px 0px;
}
.product .container {
  padding: 26px 40px;
}

.product .container .title {
  font-size : 24px;
  font-weight: 300;
  height: 66px;
}
.product .container .price {
  font-size: 20px;
  font-weight: 600;
  color: #082949;
}
</style>
