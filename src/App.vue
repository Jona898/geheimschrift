<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/GenerateEncoding">GenerateEncoding</router-link>
      <router-link to="/EncodeMessage">EncodeMessage</router-link>
    </div>

    <p>Some Test Text</p>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 0;
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px 5px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
