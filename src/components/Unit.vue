<template>
<div class="level">
  <div class="level">
    <div class="columns">
      <div class="column is-3">Unit Name</div>
      <div class="column is-7">Stats</div>
      <div class="column is-2">type</div>
    </div>
  </div>
  <div class="level">
    <div class="columns"></div>
  </div>
</div>

</template>

<script>
export default {
  name: "Unit",
  props: {
    unit: Object,
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
