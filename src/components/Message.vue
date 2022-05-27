<template>
    <v-card style="border:1px solid black;border-radius: 14px;margin:2px">
        <v-row class="xs-1">
            <div style="margin-top:10px;height:100px;width:100px">
                <v-img 
                    :src="require('@/assets/coin.png')"
                ></v-img>
            </div>
            <v-col style="">
                <div class="coinText">{{id}}</div>
                <div class="coinText">{{name}}</div>
                <div class="coinText">{{value}}</div>
                <div class="coinText">{{date}}</div>
            </v-col>
        </v-row>
    </v-card>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'Message',
    props:{
        id:{
            required:true,
            type:Number
        },
        name:{
            required:true,
            type:String
        },
        value:{
            required:true,
            type:Number
        },
        date:{
            required:true,
            type:String
        },
    },
    data:()=>({
        
    }),
})
</script>
<style scoped lang="scss">
.coinText{
    
}
</style>