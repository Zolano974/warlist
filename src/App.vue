<template>
  <div class="container">
    <div class="section">
      <zob></zob>
    </div>
    <hr>
    <!--
      <div class="section"><ArmyList :list="armylist" :codex="codex" /></div>
    -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ArmyList from "./components/ArmyList";
import Search from "./components/Search";
import Zob from "./components/Zob";

import mookArmyList from "./dao/lists/list-dev-darkelves-1";
import codex from "./dao/armies/dark-elves.js";

export default {
  name: "App",
  components: {
    HelloWorld,
    ArmyList,
    Zob
  },
  data: function() {
    return {
      armylist: mookArmyList,
      codex: codex
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
