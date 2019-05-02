<template>
  <div class="section">
    <SearchRules :rulescontent="specialRules.content"></SearchRules>
    <hr>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ArmyList from "./components/ArmyList";
import SearchRules from "./components/SearchRules";

import mookArmyList from "./dao/lists/list-dev-darkelves-1";
import codex from "./dao/armies/dark-elves.js";
import SpecialRules from "./dao/rules/special-rules-rearrange";

export default {
  name: "App",
  components: {
    HelloWorld,
    ArmyList,
    SearchRules
  },
  data: function() {
    return {
      armylist: mookArmyList,
      codex: codex,
      specialRules: SpecialRules
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
