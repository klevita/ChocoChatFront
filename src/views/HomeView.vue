<template>
<div class="wrapper">
  <div><h1>Форумы</h1></div>
  <span v-for="item in forums" class="forum">
    <forum 
      v-bind:id="item.id || '' "
      v-bind:name="item.name || '' "
      v-bind:desc="item.description || '' "
    />
  </span>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// Components
import forum from '@/components/ForumComponent.vue'
import ForumApiService from '@/services/ForumApiService'
export default defineComponent({
  name: 'HomeView',
  components: {
    forum
  },
  data:()=>({
    forums:[]
  }),
  async mounted(){
    const forums = await ForumApiService.getAll();
    this.forums = forums;
    console.log(forums)
  },
  methods: {
    coinsHandle(forums:any){
      this.forums = forums
    }
  },
  computed:{
    
  }
});
</script>
<style scoped lang="scss">
.wrapper{
  height: fit-content;
  display:flex;
  flex-direction: column;
  align-items: center;
}
.forum{
  width:100%;
}
</style>