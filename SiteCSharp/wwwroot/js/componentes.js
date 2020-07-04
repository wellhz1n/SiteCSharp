var dataVue = {};
Vue.component('texto', {
    template: `
        <p>teste texto Vue</p>`
});



var app = new Vue({
    el: '#app',
    data: dataVue

});
