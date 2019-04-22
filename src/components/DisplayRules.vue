<template>
  <div class="section">
    <div class="section" v-if="true">
      <h2 class="subtitle">Results</h2>
      <hr />
      <div class="columns" v-for="result in rules" :key="result.title">
        <div class="column is-full">
          <rule :title="result.title" :content="result.content"></rule>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Rule from "./Rule";

export default {
  name: "DisplayRules",
  components: { Rule },
  props: ["rules"],
  data() {
    return {};
  },
  methods: {},
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
