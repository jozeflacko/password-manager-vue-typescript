<template>
  <div>
    <div>Number of holders: {{holdersSize}}</div>
    <div class="p-3">
      <Holder v-for="holder in holders" v-bind:holder={holder} v-bind:key='holder.url' class="d-inline-block p-1" />
    </div>
    <div class="btn btn-primary" @click="addNew">Add Password Holder</div>
  </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Holder from '../../components/holder.vue';
import IHolder from '../../interfaces/Holder';
import ServiceProvider from '../../services';
import List from '../../utils/List';

@Component({
  components: {
    Holder
  }
})
export default class Content extends Vue {


  get holders(): Array<IHolder> {
    return this.$store.state.holders.getAll();
  }  

  get holdersSize(): number {
    return this.$store.state.holders.getSize();
  }
  
  created(): void {
    this.fetchHolders();
  }
/*
  @Watch('holders')
  onPropertyChanged(value: List<IHolder>, oldValue: List<IHolder>) {
    console.log('aaaa',this.$store.state.holders.getSize());
  }
*/
  addNew() {
    ServiceProvider.getHolderService().addNew({
      url:'www.new.com'+Date.now(),
      login:'asdf'+Date.now(),
      password:'asd'+Date.now(),
    });
  }

  private fetchHolders(): void {
    ServiceProvider.getHolderService().fetchAll();  
  }
}
</script>

<style scoped lang="scss">

</style>
