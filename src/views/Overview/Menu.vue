<template>
  <div class="navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
          <span class="btn btn-default" @click="logout">Logout</span>  
      </li>
      <li class="nav-item active">
          <router-link class="nav-link" to="/overview">overview</router-link> 
      </li>
    </ul>       
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import firebase from 'firebase';

@Component
export default class Menu extends Vue {
  logout() {
    firebase.auth().signOut().then(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    );
  }
}
</script>

<style scoped lang="scss">

</style>
