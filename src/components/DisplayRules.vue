<template>
  <div>
    <div class="section">
      <h2 class="subtitle">
        Results
        <span v-if="this.rulesCount > 0">({{ this.absOffset}} / {{this.rulesCount}})</span>
      </h2>
      <hr>
      <div class="columns" v-for="result in rules" :key="result.index">
        <transition name="fade">
          <template v-if="result.index<numberDisplayed">
            <div class="column is-full">
              <rule :title="result.title" :content="result.content"></rule>
            </div>
          </template>
        </transition>
      </div>
      <div class="section has-text-centered" v-if="rulesCount > numberDisplayed">
        <font-awesome-icon icon="circle"/>&nbsp;
        <font-awesome-icon icon="circle"/>&nbsp;
        <font-awesome-icon icon="circle"/>
      </div>
    </div>
  </div>
</template>

<script>
import Rule from "./Rule";

export default {
  name: "DisplayRules",
  components: { Rule },
  props: ["rules", "offset", "negative"],
  data() {
    return {
      numberDisplayed: 1
    };
  },
  methods: {},
  computed: {
    rulesCount() {
      return this.rules.length;
    },
    absOffset() {
      var absOffset = Math.abs(this.offset);
      var roundOffset =
        this.offset > 0 ? absOffset : this.rulesCount - absOffset;
      return roundOffset;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: opacity 0.5s;
}
</style>
