<template>
  <GetCoins v-on:recieved="coinsHandle"/>
  <CoinChoose :Coins="coins"/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
// Components
import CoinChoose from '../components/CoinChoose.vue';
import CoinOperations from '../components/CoinOperations.vue';
import GetCoins from '../components/GetCoins.vue';
export default defineComponent({
  name: 'HomeView',
  data:()=>({
    coins:[]
  }),
  components: {
    CoinChoose,
    GetCoins,
    CoinOperations
  },
  methods: {
    coinsHandle(coins:any){
      this.coins = coins
    }
  },
});
</script>
