import IdeaCard from "./components/IdeaCard";

require('./bootstrap');
window.Vue = require('vue');

const app = new Vue({
    el: '#app',
    components: {
        IdeaCard
    }
});
