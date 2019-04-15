<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">{{title}}</p>
    </header>
    <div class="card-content">
      <div class="content">
        <span v-html="content"></span>
        <br>
      </div>
    </div>
    <footer class="card-footer">-</footer>
  </div>
</template>

<script>
export default {
  name: "Rule",
  components: {},
  props: ["title", "content"],
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
