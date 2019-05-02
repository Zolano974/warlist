import Vue from "vue";
import App from "./App.vue";

import "./../node_modules/bulma/css/bulma.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faCircle,
  faCoffee,
  faCaretUp,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

library.add(faCircle);
library.add(faCoffee);
library.add(faCaretUp);
library.add(faCaretDown);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
