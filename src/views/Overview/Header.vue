<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <a class="navbar-brand" href="#">Password Manager</a>
      <Menu/>
      <div class="pull-right">
        {{currentPerson}}
      </div>  
    </nav>
  </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Menu from './Menu.vue';

@Component({
 components: {
    Menu
  },
})
export default class Header extends Vue {
  
  currentPerson: string

  created() {    
    this.currentPerson = this.$store.state.currentPerson.email;
  }
}
</script>
