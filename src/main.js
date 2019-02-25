import Vue from "vue";
import App from "view/App";
import router from "router";
import store from "store";
import component from "comp";
import cookie from "vue-cookie";
import Cube from "cube-ui";
import ElementUI from "element-ui";

import "./common/fonts/iconfont.css";
import 'element-ui/lib/theme-chalk/index.css';
import "common/sass/common.scss";

Vue.use(component);
Vue.use(cookie);
Vue.use(Cube);
Vue.use(ElementUI);

const vm = new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: {
        App
    }
})