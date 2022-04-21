<template>
    <v-form>
        <v-col>
            <v-text-field 
                :error="err"
                label="api code"
                v-model="apiCode"
                required
            ></v-text-field>
            <v-text-field
                :error="err"
                label="secret code" 
                v-model="sCode" 
                required
            ></v-text-field>
            <v-row justify="center">
                <v-btn v-on:click = "buttonHandle">submit</v-btn>
            </v-row>
        </v-col>
    </v-form>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import CoinApiService from '@/services/CoinApiService';
export default defineComponent({
    name: 'GetCoins',
    data:()=>({
        err:false,
        sCode:null,
        apiCode:null
    }),
    methods:{
        async buttonHandle(){
            let resp = await CoinApiService.getAll()
            if(resp===0){
                this.err = true
            }else{
                this.$emit("recieved",resp)
                this.err = false
            }
        },
    }
})
</script>
<style scoped lang="scss">
</style>
