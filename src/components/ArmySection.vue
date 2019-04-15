<template>
<div class="columns">
  <div class="column is-full">
    <div class="box">
      <h4 class="subtitle">{{ section }} ({{ stats.total }} pts)</h4>

      <hr>

      <div class="box" v-for="unit in units" v-bind:key="unit.unitKey">
        <unit :unit="unit"></unit>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import Unit from './Unit'
export default {
  name: "ArmySection",
  components:{
    Unit,
  },
  props: {
    section: String,
    units: Array,
    stats: Object
  },
  methods: {},
  computed: {},
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
