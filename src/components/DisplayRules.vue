<template>
  <div class="section">
    <div class="section" v-if="true">
      <h2 class="subtitle">
        <button class="button is-dark" v-on:click="decrement">
          <span class="icon">
            <font-awesome-icon icon="angle-double-left"/>
          </span>
        </button>
        Results
        <button class="button is-dark" v-on:click="increment">
          <span class="icon">
            <font-awesome-icon icon="angle-double-right"/>
          </span>
        </button>
      </h2>
      <hr>
      <div class="columns" v-for="result in indexedRules" :key="result.index">
        <transition name="fade">
          <div v-if="result.index==0" class="column is-full">
            <rule :title="result.title" :content="result.content"></rule>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Rule from "./Rule";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCoffee);

export default {
  name: "DisplayRules",
  components: { Rule },
  props: ["rules"],
  data() {
    return {
      offset: 1
    };
  },
  methods: {
    increment(event) {
      var n = (this.offset + 1) % (this.rulesCount == 0 ? 1 : this.rulesCount);
      console.log(n);
      this.offset = Number(n);
    },
    decrement(event) {
      var y = (this.offset - 1) % (this.rulesCount == 0 ? 1 : this.rulesCount);

      this.offset = Number(y);
    }
  },
  computed: {
    rulesCount() {
      console.log(this.rules.length);
      return this.rules.length;
    },
    indexedRules() {
      var indexed = [];
      var offset = this.offset;
      for (var i = 0; i < this.rulesCount; i++) {
        //modulo pour la rotation
        var index = Math.abs((i + offset) % this.rulesCount);
        indexed.push({
          ...this.rules[index],
          index: i
        });
      }
      return indexed;
    }
  },
  created() {},
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
