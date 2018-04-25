import Vue from 'vue';
import Router from 'vue-router';
import Login from './views/Login.vue';
import Signin from './views/SignIn.vue';
import Overview from './views/Overview/Overview.vue';

Vue.use(Router);

// for javascript navigation
export class Navigation {
  
  public static PAGE_NAME_LOGIN: string = '/';
  public static PAGE_NAME_SIGNIN: string = 'signin';
  public static PAGE_NAME_OVERVIEW: string = 'overview';

  public static changePage(app:Vue, pageName: string): void {
    app.$router.push(pageName);
  }
}

// for html anchor nagivation
class NavigationPaths {  
  public static PAGE_NAME_LOGIN: string = Navigation.PAGE_NAME_LOGIN;
  public static PAGE_NAME_SIGNIN: string = NavigationPaths.PAGE_NAME_LOGIN + Navigation.PAGE_NAME_SIGNIN;
  public static PAGE_NAME_OVERVIEW: string = NavigationPaths.PAGE_NAME_LOGIN + Navigation.PAGE_NAME_OVERVIEW;
}

export default new Router({
  routes: [
    {
      path: NavigationPaths.PAGE_NAME_LOGIN,
      name: Navigation.PAGE_NAME_LOGIN,
      component: Login,
    },
    {
      path: NavigationPaths.PAGE_NAME_SIGNIN,
      name: Navigation.PAGE_NAME_SIGNIN,
      component: Signin,
    },
    {
      path: NavigationPaths.PAGE_NAME_OVERVIEW,
      name: Navigation.PAGE_NAME_OVERVIEW,
      component: Overview,
    },
  ],
});
