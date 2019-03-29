<template>
  <div class="consultant">
    <div class="flex-left-align">
      <img class="avatar" src="@/assets/avatars/pxl@2x.jpg">
      <div>
        <div class="name">潘晓良</div>
        <div class="position">技术合伙人</div>
      </div>
    </div>
    <div class="job-title">前百姓网CTO&联合创始人</div>
    <div class="desc">
      从零开始打造百姓网 “小而美”的技术团队
      在产品运营、公司文化、人事制度等方面经验丰富
    </div>
    <div v-on:click="pressed()" class="contact-button">咨询 ￥2900</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    pressed() {
      this.$emit('chosen')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.consultant {
  color: #162944;
}
.avatar {
  width: 78px;
  height: 78px;
  border-radius: 39px;
  box-shadow: 0 10px 10px 0 rgba(0, 0, 0, 0.1);
  margin-right: 10px;
}
.name {
  font-size: 35px;
}

.position {
  font-size: 15px;
}

.job-title {
  margin: 20px 0px;
}
.desc {
  margin: 20px 0px;
}

.contact-button {
  width: 100%;
  height: 63px;
  line-height: 63px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  color: #f5f7fa;;
  border-radius: 4px;
  background-color: #126eff;
  cursor: pointer;
}
</style>
