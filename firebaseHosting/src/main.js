// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import props from './mixins/props'
import firestore from 'firebase/firestore'
Vue.config.productionTip = false

var config = {
   apiKey: 'AIzaSyCZ4HUGdWXM8Zkjv1V6QTVznkrulB4hyN4',
   authDomain: 'primerproyecto-79dc7.firebaseapp.com',
   databaseURL: 'https://primerproyecto-79dc7.firebaseio.com',
   projectId: 'primerproyecto-79dc7',
   storageBucket: 'primerproyecto-79dc7.appspot.com',
   messagingSenderId: '445863153457'
 };
 firebase.initializeApp(config);

 Vue.use(firebase)
 Vue.use(firestore)
 Vue.mixin(props)

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
