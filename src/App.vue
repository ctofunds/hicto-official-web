<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont,  "PingFang SC", STHeiti, "Microsoft Yahei", Tahoma, Simsun, sans-serif;
}



body, h1, h2, h3, h4 {
  padding: 0px;
  margin: 0px;
}

a:link {
  text-decoration: none;
}
a {
  color: #fff;
}

.limited-width {
  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
}


.logo {
  width: 102px;
  height: 24px;
}

a:link {
  text-decoration: none;
}


.full-width {
  width: 100%;
}

.centered {
  display:block;
  margin-left:auto;
  margin-right:auto;
}

.centered-text {
  text-align: center;
}

.seperator-line {
  /* margin: 0px 20px; */
	height: 1px;
	background-color: #f5f7fa;
}

.container {
  padding: 40px;
}

.flex-space-between {
  display:flex;
  justify-content: space-between;
  align-items: center;
}

.flex-left-align {
  display:flex;
  justify-content: flex-start;
  align-items: center;
}

.flex-right-align {
  display:flex;
  justify-content: flex-end;
  align-items: center;
}


.title {
  font-size: 24px;
  color: #162944;
  font-weight: 100;
}

.ratio-4_3 {
  position: relative;
}

.ratio-4_3:after {
  content: "";
  display: block;
  padding-bottom: 75%;
}

.ratio-4_3-content {
  width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}

.ratio-16_9 {
  overflow: hidden;
  position: relative;
}

.ratio-16_9:after {
  content: "";
  display: block;
  padding-bottom: 56.25%;
}

.ratio-16_9-content {
  width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
.cover {
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}
.black-mask {
  background-color: #000;
  opacity: 0.4;
  position: absolute;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
}

</style>
