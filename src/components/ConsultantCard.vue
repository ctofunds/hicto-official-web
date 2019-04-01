<template>
  <div class="consultant">
    <div class="flex-left-align">
      <img class="avatar" :src="consultant.avatar">
      <div>
        <div class="name">{{consultant.name}}</div>
        <div class="position">{{consultant.position}}</div>
      </div>
    </div>
    <div class="job-title">{{consultant.jobTitle}}</div>
    <div class="desc">
      {{consultant.introduction}}
    </div>
    <div v-on:click="pressed()" class="contact-button">咨询 ￥2900</div>
  </div>
</template>

<script>
export default {
  props: {
    consultant: Object
  },
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
