import Footer from "comp/footer";
import Header from "comp/header";
import Dialog from "comp/dialog";

const component = {
    install: (Vue) => {
        Vue.component('Footer', Footer);
        Vue.component('Header', Header);
        Vue.component('Dialog', Dialog);
    }
}

export default component;