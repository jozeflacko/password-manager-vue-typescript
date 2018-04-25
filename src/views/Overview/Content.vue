<template>
  <div>
    Content
  </div> 
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Content extends Vue {
  @Prop() private msg?: string;
}
</script>

<style scoped lang="scss">

</style>
