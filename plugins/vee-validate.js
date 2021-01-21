import Vue from 'vue'
import {
    extend,
    ValidationProvider,
    ValidationObserver,
} from 'vee-validate'
import {required, email} from 'vee-validate/dist/rules'

extend('required', required)
extend('email', email)

Vue.component('validation-provider', ValidationProvider) //各フィールドを監視
Vue.component('validation-observer', ValidationObserver) //フォーム船体を監視

