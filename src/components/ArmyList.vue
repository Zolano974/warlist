<template>
  <div class="armylist">
    <h2 class="title">{{ title }} (X pts)</h2>
    <h4 class="subtitle">{{ comment }}</h4>
  </div>
</template>

<script>
export default {
  name: "ArmyList",
  props: {
    list: Object,
    codex: Object
  },
  computed: {
    title() {
      return this.list.title;
    },
    comment() {
      return this.list.comment;
    },
    lordsCost() {
      return this.list.army.lords
        .map(e => {
          return e.finalCost;
        })
        .reduce((acc, elt) => {
          return acc + elt;
        });
    },

    heroesCost() {
      return this.list.army.heroes
        .map(e => {
          return e.finalCost;
        })
        .reduce((acc, elt) => {
          return acc + elt;
        }, 0);
    },

    coreCost() {
      return this.list.army.base
        .map(e => {
          return e.finalCost;
        })
        .reduce((acc, elt) => {
          return acc + elt;
        }, 0);
    },

    specialCost() {
      console.error(this.list.army.special);
      return this.list.army.special
        .map(e => {
          return e.finalCost;
        })
        .reduce((acc, elt) => {
          return acc + elt;
        }, 0);
    },
    rareCost() {
      return this.list.army.rare
        .map(e => {
          return e.finalCost;
        })
        .reduce((acc, elt) => {
          return acc + elt;
        }, 0);
    },
    globalCost() {
      return (
        this.lordsCost() +
        this.heroesCost() +
        this.coreCost() +
        this.specialCost() +
        this.rareCost()
      );
    }
  },
  created() {
    console.error("created");
    //console.log(this.lordsCost);
    //console.log(this.heroesCost);
    //console.log(this.coreCost);
    //console.log(this.specialCost);
    //console.log(this.rareCost);
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
