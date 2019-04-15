<template>
  <div class="section">
    <h1 class="title">Search Rules</h1>

    <div class="section">
      <input type="text" v-model="search">
    </div>

    <div class="section">
      <p>{{ displayedContent }}</p>
    </div>
  </div>
</template>

<script>
import SpecialRules from "../dao/rules/special-rules";

export default {
  name: "Search",
  components: {},
  props: {},
  data() {
    return {
      specialRulesRawContent: SpecialRules.content,
      specialRuleTitleBeginningPattern: "^[A-Z]+( )*",
      specialRuleTitleEndPattern: "[A-Z]+( )*$",
      fullTitleRegex: "w*([A-ZÉÀ]w*[A-ZÉÀ]+)(( )*([A-ZÉÀ]w*[A-ZÉÀ]+)*)*w*",

      search: ""
    };
  },
  methods: {
    //Detects and tags the titles
    tagTitles(match, p1, p2, p3, offset, string) {
      //console.log("title => " + match);
      return "{title}" + match + "{/title}";
    },
    //extract the titles as an array of String
    extractTitles(content) {
      var regex = /\{title\}.*\{\/title\}/g;
      var m;
      var titles = [];

      var i = 10000;
      do {
        m = regex.exec(content);
        if (m) {
          titles.push(m[0]);
        }
        i--;
      } while (m && i > 0);

      return titles;
    },
    //extract the Contents as an array of String
    extractContents(content) {
      var regex = /\{title\}.*\{\/title\}/g;
      return content.split(regex);
    },
    //filters the titles according to the search input
    searchTitles(titles) {
      var filteredTitles = [];

      var i;
      for (i = 0; i < titles.length; i++) {
        var title = titles[i];
        if (title.indexOf(this.search) != -1) {
          filteredTitles.push(title);
        }
      }

      return filteredTitles;
    },
    matchContents(titles, contents, search) {
      //todo: pour chaque title, matcher les contents correspondants
      //algo: chercher un content contenant au moins 1 des mots du title en min | search
      //then : TODO créer un composant pour le rendu d'un TITLE avec N CONTENTS
    }
  },
  computed: {
    contentWithTaggedTitles: function() {
      return this.specialRulesRawContent.replace(
        /w*([A-ZÉÀ]w*[A-ZÉÀ]+)(( )*([A-ZÉÀ]w*[A-ZÉÀ]+)*)*w*/g,
        this.tagTitles
      );
    },
    searchedContent: function() {
      var initialContent = this.contentWithTaggedTitles;
      var titles = this.extractTitles(initialContent);
      var contents = this.extractContents(initialContent);

      var searchedtitles = this.searchTitles(titles);
      var titlesWithContents = this.matchContents(
        searchedtitles,
        contents,
        search
      );
      console.log(searchedtitles);
    },
    displayedContent: function() {
      return "yolo";
      /*
      return this.searchedContent
        .replace("{title}", "")
        .replace("{/title}", "");
        */
    }
  },
  created() {
    console.error("search created");
  },
  mounted() {
    console.log("search mounted");
    console.log(this.contentWithTaggedTitles);
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
