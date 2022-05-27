<template>
    <v-card class="content" v-on:click="">
        <div><b><h3>{{name}}</h3></b></div>
        <tr></tr>
        <div>{{desc}}</div>
        <div>{{date}}</div>
    </v-card>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: 'ForumComponent',
    props:{
        id:{
            required:true,
            type:String
        },
        name:{
            required:true,
            type:String
        },
        desc:{
            required:true,
            type:String
        },
        date:{
            required:false,
            type:String
        },
    },
    data:()=>({
        
    }),
    methods:{

    }
})
</script>
<style scoped lang="scss">
.content{
    padding:4px;
    display:flex;
    flex-direction: column;
    border:1px solid black;
    box-shadow: 2px 2px 5px black;
    border-radius: 6px;
    margin:5px;
}
</style>