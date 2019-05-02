<template>
  <div class="section">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h2 class="subtitle has-text-centered">Rechercher une règle spéciale &nbsp;&nbsp;</h2>
        </div>
      </div>
    </section>

    <div class="section">
      <input
        class="input is-primary"
        type="text"
        placeholder="Search a Rule..."
        v-model="search"
        v-on:keydown.up="increment"
        v-on:keydown.down="decrement"
      >
      <p class="advice">Utilise
        <font-awesome-icon icon="caret-up"/>&nbsp;et
        <font-awesome-icon icon="caret-down"/>&nbsp;pour faire défiler les résultats
      </p>
    </div>
    <display-rules :rules="indexedRules" :offset="offset" :negative="negativeCoeff"></display-rules>
  </div>
</template>

<script>
import DisplayRules from "./DisplayRules";

export default {
  name: "SearchRule",
  components: { DisplayRules },
  props: ["rulescontent"],
  data() {
    return {
      search: "",
      offset: 1
    };
  },
  methods: {
    increment(event) {
      var n = (this.offset + 1) % (this.rulesCount == 0 ? 1 : this.rulesCount);

      this.offset = Number(n);
    },
    decrement(event) {
      var y =
        (this.offset - 1) %
        (this.rulesCount == 0 ? 1 : this.rulesCount);
      console.log("offset : " + this.offset);
      console.log("modulo : " + this.rulesCount);
      console.log("result : " + y);
      this.offset = Number(y);
    },
    /**
     * Splits the raw content to an array mapping the titles and contents
     */
    splitContent(content) {
      //we fetch "$TITLE {/title} $CONTENT" blocks
      var stepOne = content.split("{title}");

      //we separate title and content
      var contents = stepOne.map(function(elt) {
        var separated = elt.split("{/title}");

        var title = separated[0] || "";
        var content = separated[1] || "";

        var regex = /\[enter\]/gi;

        var replacedContent = content.replace(regex, "<br/>");

        return {
          title: title,
          content: replacedContent
        };
      });
      return contents;
    },
    matchTitle(title, search) {
      if (title == undefined) {
        return false;
      }

      //handle case
      var lowtitle = title
        .toLowerCase()
        .replace("é", "e")
        .replace("è", "e")
        .replace("ê", "e")
        .replace("à", "a");
      var lowsearch = search
        .toLowerCase()
        .replace("é", "e")
        .replace("è", "e")
        .replace("ê", "e")
        .replace("à", "a");

      var searchTerms = lowsearch.split(" ");

      var matched = false;
      var i;
      for (i = 0; i < searchTerms.length; i++) {
        if (searchTerms[i] != "" && lowtitle.indexOf(searchTerms[i]) !== -1)
          matched = true;
      }
      return matched;
    },
    /**
     * filters the title:content array, according to the search pattern
     */
    filterOnTitles(mappings, search) {
      if (search == "") return [];

      var that = this;
      var filtered = mappings.filter(function(elt) {
        return that.matchTitle(elt.title, search);
      });

      return filtered;
    }
  },
  computed: {
    negativeCoeff() {
      return this.offset >= 0 ? 1 : -1;
    },
    rulesCount() {
      return this.searchedContents.length;
    },
    searchedContents() {
      var mappings = this.splitContent(this.rulescontent);

      //      return mappings;
      var filtered = this.filterOnTitles(mappings, this.search);

      return filtered;
    },
    indexedRules() {
      var indexed = [];
      var offset = this.offset;
      for (var i = 0; i < this.rulesCount; i++) {
        //modulo pour la rotation
        var index = Math.abs(
          ((i + offset) % this.rulesCount) * this.negativeCoeff
        );
        indexed.push({
          ...this.searchedContents[index],
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
.advice {
  font-style: italic;
  color: #999;
}
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
