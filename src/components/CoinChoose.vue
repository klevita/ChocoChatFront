<template>
  <v-container>
    <v-row>
      <v-col>
        <span v-for="i in Coins">
          <Coin 
            :id="i.coinId"
            :name="i.coinName"
            :value="i.coinValue"
            :date="i.coinTime"
          />
          
        </span>
      </v-col>
      <v-col>

      </v-col>
    </v-row>
  </v-container>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import Coin from '@/components/Coin.vue'
export default defineComponent({
  name: 'CoinChoose',
  components:{
    Coin
  },
  props:{
    Coins:{
      type:Array,
      required:true
    }
  },
  data:()=>({
  }),
  watch:{
    Coins(){
      console.log(this.Coins[0])
    }
  }
})
</script>
<style scoped lang="scss">
</style>