import Vue from 'vue/dist/vue'
import SomeItem from '../../Components/SomeItem.vue'

Vue.component("someitem", SomeItem);

var app = new Vue({
    el: '#app',
    mounted: function (){
        window.console.log("Hello from Vue!");
    }
});
