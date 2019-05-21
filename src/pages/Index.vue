<template>
  <div>
    <header-view/>
      <div class="top">
        <h2 class="big-title" style="font-size:60px;">创业者可信赖的共享技术合伙人</h2>
        <p class="" style="font-size: 32px;font-weight: 100; margin-top:20px;">实力派技术VC，未来独角兽背后的技术赋能机构</p>     
        <div class="flex-space-between limited-width" style="margin-top:60px; align-items:flex-start;">
          <div class="info">
            <div style="align-items:flex-start; margin-bottom:10px;">
              <span class="big-title">15</span>
              <span class="desc">家</span>
            </div>
            <div class="desc">DCM、君联、高榕等15家知名机构的指定技术尽职调查供应商</div>
          </div>
          <div class="info">
            <div style="align-items:flex-start; margin-bottom:10px;">
              <span class="big-title">36</span>
              <span class="desc">个</span>
            </div>
            <div class="desc">HiCTO深度赋能服务和投资了36家创业企业，包括Hitales、兔博士、比心、辅料易、鱼大大等项目，超过50%项目是由凯辉、高榕、经纬、软银等知名机构推荐</div>
          </div>
          <div class="info">
            <div style="align-items:flex-start; margin-bottom:10px;">
              <span class="big-title">65</span>
              <span class="desc">%</span>
            </div>
            <div class="desc">技术赋能期间超过65%的所服务企业获得红杉、经纬、IDG、凯辉等知名投资机构的后续投资</div>
          </div>
        </div> 
      </div>
      <div class="limited-width">
        <section>
          <div class="flex-space-between">
            <div class="value">
              <div>降低技术风险</div>
              <div>提高研发效率</div>
            </div>
            <div class="value">
              <div>为创业者赋能技术</div>
              <div>加速创业梦想 & 创新转型</div>
            </div>
            <div class="value">
              <div>培养骨干团队</div>
              <div>成就业务成长</div>
            </div>
          </div>
        </section>
        <div id="team" class="seperator-line"></div>
        <section >
          <div class="big-title centered-text" style="margin-bottom:30px;">核心团队</div>
          <div class="flex-space-between" style="align-items:flex-start; flex-wrap: wrap;">
            <div class="member" v-for="member in data.members">
              <img class="avatar centered" :src="member.avatar" alt="">
              <div class="name">{{member.name}}</div>
              <div class="position">{{member.position}}</div>
              <div class="intro">
                <div v-for="title in member.titles">{{title}}</div>
              </div>
              <div class="intro">
                <div  v-for="intro in member.introduction">{{intro}}</div>
              </div>
            </div>
          </div>
          <div class="centered" style="font-size: 20px; font-weight:300; max-width:650px; line-height:1.5;">
            此外，HiCTO 还有一批全职技术专家，他们曾在腾讯、阿里、百度、滴滴、EMC、SAP 等知名公司担任研发总监或高端架构师。这些技术专家擅长于前端、后端、算法、数据、 客户端、区块链等各个技术领域，他们主要负责赋能项目的落地实施过程把关。
          </div>
        </section>
        <div id="projects"class="seperator-line"></div>
        <section >
          <div class="big-title centered-text" style="margin-bottom:30px;">赋能项目</div>
          <div class="centered" style="font-size: 20px; font-weight:300; max-width:650px; line-height:1.5;">
            HiCTO作为创业者的共享技术合伙人，提供全方位可落地的技术支持。目前已成功赋能三十余个互联网创业项目，包括兔博士、Hitales、辅料易、拼多多、名堂、比心、名医主刀、鱼大大、Nonda、Carblock等优秀企业，其中65%的项目赋能期间成功获得下一轮融资。
          </div>
          <div class="flex-space-between" style="flex-wrap: wrap; margin-top: 80px;">
            <div class="client" v-for="client in data.clients">
              <img class="icon centered" :src="client.icon" alt=""/>
              <div class="centered-text" style="font-size:18px; font-weight:bold;margin-top:20px;">{{client.name}}</div>
            </div>
          </div>
        </section>
        <div id="funds" class="seperator-line"></div>
        <section >
          <div class="big-title centered-text" style="margin-bottom:30px;">合作机构</div>
          <div class="flex-space-between" style="flex-wrap: wrap;">
            <div class="vc" v-for="vc in data.vcs">
              <img class="centered" :src="vc.icon" alt=""/>
            </div>
          </div>
        </section>
      </div>
    <footer-view/>
  </div>
</template>

<script>
import HeaderView from "@/components/HeaderView";
import FooterView from "@/components/FooterView";
import data from "@/libs/indexData";

export default {
  components: { HeaderView, FooterView },
  data() {
    return {
      data: data
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
.top {
    margin-top: -80px;
    padding: 260px 20px 120px 20px;
    box-sizing: border-box;
    background: url(~@/assets/bg.jpg) no-repeat center;
    background-size: cover;
    color: #ffffff;
    position: relative;
    text-align: center;
}

.top .info {
  width: 24%;
  margin-bottom: 30px;
}

.top .desc {
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
}

section {
  padding: 70px 0px;
}

.value {
  text-align: center;
  width:33%;
  font-size: 30px;
  font-weight: 100;
}

.member {
  text-align: center;
  width:30%;
  margin-bottom: 80px;
}

.member .avatar {
  border-radius: 50%;
  height: 210px;
  width: 210px;
}
.seperator-line {
  margin-bottom:30px;
}
.member .name {
  font-size: 28px;
  font-weight: bold;
  margin: 20px 0px 10px 0px;
}
.member .position {
  color: #999;
}
.member .intro {
  color: #666;
  line-height: 1.6;
  margin: 10px 0px 10px 0px;
}

.client {
  width: 25%;
  margin-bottom: 80px;
}
.client img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.vc {
  width: 25%
}
.vc img {
  width: 80%;
}
/* mobile */
@media screen and (max-width: 700px) {
  .top .info {
    width: 100%;
  }
  .value {
    margin-bottom: 30px;
  }
  .flex-space-between {
    display: block;
  }
  .flex-space-between div {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
}
</style>
