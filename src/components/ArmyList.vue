<template>
  <div class="section">
    <h2 class="title">{{ title }} ({{ globalCost }} pts)</h2>
    <h3 class="subtitle">{{ comment }}</h3>

    <hr>

    <div class="level" style="width:100%">
      <army-section 
        section="Lords" 
        :units="list.army.lords"
        :stats="stats.lords"
        ></army-section>
    </div>

    <div class="level">
      <army-section 
        section="Heroes" 
        :units="list.army.heroes"
        :stats="stats.heroes"
        ></army-section>
    </div>

    <div class="level">
      <army-section 
        section="Core" 
        :units="list.army.core"
        :stats="stats.core"
        ></army-section>
    </div>

    <div class="level">
      <army-section 
        section="Special" 
        :units="list.army.special"
        :stats="stats.special"
        ></army-section>
    </div>

    <div class="level">
      <army-section 
        section="Rare" 
        :units="list.army.rare"
        :stats="stats.rare"
        ></army-section>
    </div>
  </div>
</template>

<script>
import ArmySection from "./ArmySection";
export default {
  name: "ArmyList",
  components: {
    ArmySection
  },
  props: {
    list: Object,
    codex: Object
  },
  methods: {
    percentage(cost) {
      return cost === 0 ? 0 : Math.round((cost * 100) / this.globalCost, 2);
    }
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
        }, 0);
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
      return this.list.army.core
        .map(e => {
          return e.finalCost;
        })
        .reduce((acc, elt) => {
          return acc + elt;
        }, 0);
    },

    specialCost() {
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
        this.lordsCost +
        this.heroesCost +
        this.coreCost +
        this.specialCost +
        this.rareCost
      );
    },
    stats() {
      var that = this;
      return {
        lords: {
          total: this.lordsCost,
          percentage: that.percentage(this.lordsCost)
        },
        heroes: {
          total: this.heroesCost,
          percentage: that.percentage(this.heroesCost)
        },
        core: {
          total: this.coreCost,
          percentage: that.percentage(this.coreCost)
        },
        special: {
          total: this.specialCost,
          percentage: that.percentage(this.specialCost)
        },
        rare: {
          total: this.rareCost,
          percentage: that.percentage(this.rareCost)
        }
      };
    }
  },
  created() {
    console.error("created");
    //console.log(this.lordsCost);
    //console.log(this.heroesCost);
    //console.log(this.coreCost);
    //console.log(this.specialCost);
    //console.log(this.rareCost);
  },
  mounted() {
    console.log("mounted");
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
