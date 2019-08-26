import IdeaCard from "./components/ideaCard";
require('./bootstrap');

window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    components: {
        IdeaCard,
    }
});
