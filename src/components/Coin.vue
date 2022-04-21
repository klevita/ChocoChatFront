<template>
    <v-container>
        <v-row>
            <v-img 
              :src="'@/assets/coin.png'"
              max-height="150"
              max-width="150"
            ></v-img>
            <v-col>
                <v-row>
                    {{id}}
                </v-row>
                <v-row>
                    {{name}}
                </v-row>
                <v-row>
                    {{value}}
                </v-row>
                <v-row>
                    {{date}}
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'CoinOperations',
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
</style>