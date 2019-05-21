<template>
  <div class="main">
    <header-view />
      <div class="top" style="padding:150px 0px 100px 0px;">
        <div class="big-title" style="">{{service.name}}</div>
        <div class="" style="font-size: 32px;font-weight: 100; margin-top:10px;">{{service.description}}</div>
        <div class="centered" style="font-size: 18px; font-weight:300; line-height:1.5; margin-top:50px; max-width:570px; padding:0px 20px;">{{service.introduction}}</div>
      </div>
      <div class="limited-width">
        <section class="problems" v-if="service.problems">
          <div class="centered-text" style="font-size: 40px;font-weight: 100; margin-bottom:60px;">{{service.problems.title}}</div>
          <div class="flex-space-between" style="align-items:flex-start;">
            <div class="problem" v-for="problem in service.problems.details">
              <img class="image" :src="problem.icon">
              <div class="title centered-text" style="font-size:20px; margin-top:30px;">{{problem.title}}</div>
              <div class="desc" >
                <p v-for="desc in problem.descriptions">
                  {{desc}}
                </p>
              </div>
            </div>
          </div>
        </section>
        <section class="value" v-if="service.logic">
          <div class="big-title centered-text" style="margin-bottom:30px;">技术VC投资赋能逻辑</div>
          <div class="flex-space-between">
            <div class="circle-text" style="background-color:#0975cf" v-for="value in service.logic">
              <div v-for="line in value">{{line}}</div>
            </div>
          </div>
        </section>
        <div class="seperator-line"></div>
        <section class="value">
          <div class="big-title centered-text" style="margin-bottom:30px;">技术赋能的核心价值</div>
          <div class="flex-space-between">
            <div class="circle-text" v-for="value in service.values">
              <div v-for="line in value">{{line}}</div>
            </div>
          </div>
        </section>
        <div class="seperator-line"></div>
        <section class="value">
          <div class="big-title centered-text" style="margin-bottom:30px;">核心赋能服务</div>
          <div class="flex-space-between">
            <div class="circle-text" style="background-color:#0975cf" v-for="content in service.contents">
              <div v-for="line in content">{{line}}</div>
            </div>
          </div>
        </section>
        <div class="seperator-line"></div>
        <section class="cooperation">
          <img class="image centered" style="width:300px;" src="@/assets/service/cooperation.jpg">
          <div class="big-title centered-text" style="margin:30px;">我们的合作形式</div>
          <div class="flex-space-between" style="margin-top:50px; justify-content:space-around;">
            <div class="way centered-text">
              <div class="title" style="font-size: 24px;font-weight: 600; margin-bottom:12px;">技术入股</div>
              <div class="text">
                <div>HiCTO提供技术赋能服务</div>
                <div>创业公司支付合同对价股权</div>
              </div>
            </div>
            <div class="way centered-text" style="">
              <div class="title" style="font-size: 24px;font-weight: 600; margin-bottom:12px;">技术入股+现金</div>
              <div class="text">
                <div>HiCTO提供技术赋能服务</div>
                <div>创业公司支付部分现金+股权</div>
              </div>
            </div>
            <div v-if="service.key != 'venture'" class="way centered-text" style="">
              <div class="title " style="font-size: 24px;font-weight: 600; margin-bottom:12px;">现金</div>
              <div class="text">
                <div>HiCTO提供技术赋能服务</div>
                <div>创业公司支付合同全部现金</div>
              </div>
            </div>
          </div>
        </section>
        <div class="seperator-line"></div>
        <section class="value" v-if="service.targets">
          <div class="big-title centered-text" style="margin-bottom:30px;">我们在寻找的项目类型</div>
          <div class="flex-space-between">
            <div class="circle-text" style="" v-for="target in service.targets">
              <div v-for="line in target">{{line}}</div>
            </div>
          </div>
        </section>
        <section class="flow centered-text" v-if="service.flow">
          <div class="big-title" style="margin:30px;">我们的合作流程</div>
          <div class="text">
            <div class="step" v-for="step in service.flow">
              {{step}}
            </div>
          </div>
        </section>
        <a href="mailto:berner.lin@ctofunds.com" class="contact-button centered" style="margin-top:0px; margin-bottom:100px;">联系我们</a>
      </div>
    <footer-view/>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import FooterView from "@/components/FooterView";
import serviceData from "@/libs/serviceData";

export default {
  components: { FooterView, HeaderView },
  data() {
    return {
      service: serviceData[this.$route.params.key || "accelerator"]
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
      this.service = serviceData[this.$route.params.key || "accelerator"]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top {
    padding: 180px 20px;
    box-sizing: border-box;
    background: url(~@/assets/bg.jpg) no-repeat center;
    background-size: cover;
    color: #FFF;
    background-color: #246;
    position: relative;
    text-align: center;
    min-height: 520px;
}

section {
  padding: 70px 0px;
}

.problem {
  width: 29%;
}


.problem .image {
  /* width: 90%; */
  width: auto;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  display: block;
}

.problem .title {
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0px;
}

.problem .desc {
  font-size: 16px;
  font-weight: 100;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: #4a4a4a;
}

.circle-text {
  background-color: #49a0e8;
  color: #fff;
  width: 200px;
  height: 200px;
  text-align: center;
  padding: 20px;
  line-height:1.5;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center
}

.text {
  font-size: 24px;
  font-weight: 100;
  color: #272727;
}

.way {
  margin-bottom:20px;
}
.step {
  margin:10px 0px;
}

.contact-button {
  width: 300px;
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

/* mobile */
@media screen and (max-width: 800px) {
  .main {
    text-align: center;
  }
  .flex-space-between {
    display: block;
  }
  .problem {
    width: 100%;
    margin-bottom:40px;
  }
  .circle-text {
    margin-right:auto;
    margin-bottom: 10px;
    margin-left:auto;
  }
}
</style>
