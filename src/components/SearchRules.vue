<template>
  <div class="section">
    <h1 class="title">Search Rules</h1>

    <div class="section">
      <input class="input is-primary" type="text" placeholder="Search a Rule..." v-model="search">
    </div>
    <display-rules :rules="searchedContents"></display-rules>
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
      search: ""
    };
  },
  methods: {
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
    searchedContents() {
      var mappings = this.splitContent(this.rulescontent);

      //      return mappings;
      var filtered = this.filterOnTitles(mappings, this.search);

      return filtered;
    },
    oddSearchedContents() {
      var odds = [];
      for (var i = 0; i < this.searchedContents.length; i = i + 2) {
        if (this.searchedContents[i] != undefined)
          odds.push(this.searchedContents[i]);
      }
      return odds;
    },
    evenSearchedContents() {
      var evens = [];
      for (var i = 1; i < this.searchedContents.length; i = i + 2) {
        if (this.searchedContents[i] != undefined)
          evens.push(this.searchedContents[i]);
      }
      return evens;
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
