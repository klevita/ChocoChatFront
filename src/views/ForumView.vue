<template>
 

</template>

<script lang="ts">
import { defineComponent } from 'vue';
// Components

export default defineComponent({
  name: 'HomeView',
  data:()=>({
    coins:[]
  }),
  components: {

  },
  methods: {
    coinsHandle(coins:any){
      this.coins = coins
    }
  },
});
</script>
