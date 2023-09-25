import { createApp } from 'vue'
import App from './App.vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCog, faPhone, faPowerOff, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


library.add(faPhone);
library.add(faBars);
library.add(faPowerOff);
library.add(faCog);
library.add(faUserCircle);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount('#app')
