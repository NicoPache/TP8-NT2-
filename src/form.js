import Vue from 'vue'
import VueForm from "vue-form"

var options = {
    validators: {
        'no-espacios': function(value) {
            return !value.includes(' ')
        },
        "no-numero": function(value) {
            const regex = /\d/g;
            return !regex.test(value);
          },
        "email-valido":function(value) {
            const emailFormat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,4})+$/;
            return emailFormat.test(value)
        }
     }
}

Vue.use(VueForm, options)
