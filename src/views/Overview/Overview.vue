<template>
  <div>
    <Header/>
    <div class="container-fluid">      
        <Content/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './Header.vue';
import Content from './Content.vue';


@Component({
  components: {
    Header, Content
  },
})
export default class Overview extends Vue {

}
</script>