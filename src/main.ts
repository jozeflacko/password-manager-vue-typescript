import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import FirebaseProvider from './services/firebase/firebaseProvider';
import Triggers from './store/triggers';
import { Navigation } from './router';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

// create vue application
const vue = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

FirebaseProvider.start((user:any)=>{
  if(! store) {
    return;
  }
  
  console.log(user);
  if(user) {
    // user is signed
    store.dispatch(Triggers.SET_CURRENT_PERSON, { email: user.email });
    Navigation.changePage(vue, Navigation.PAGE_NAME_OVERVIEW);
  } else {
    // no user is signed
    store.dispatch(Triggers.SET_CURRENT_PERSON, { email: '' });
    Navigation.changePage(vue, Navigation.PAGE_NAME_LOGIN);
  }
});
