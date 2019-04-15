<template>
  <div class="section"></div>
</template>

<script>
export default {
  name: "Empty",
  components: {},
  props: {},
  methods: {},
  computed: {},
  created() {
    console.error("empty created");
  },
  mounted() {
    console.log("empty mounted");
  }
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
