<template>
  <v-app>
    <v-main class="wrapper">
      <div class="bar">
        
        <div class="logo">Лучший форум про грибы</div>
        <v-btn  class="loginButton">Войти</v-btn>
      </div>
      <div class="main">
        <div class="sideBar" style="box-shadow: 0px 3px 6px black;">1</div>
        <div class="stock">
          <router-view />
        </div>
        <div class="sideBar">3</div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',

  data() {
    return {
      //
    }
  },
})
</script>
<style scoped lang="scss">
$primary: #333;

.bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 2px 5px black;
  padding:4px;
}
.logo{
  font-family: 'Brush Script MT', cursive;
}
.stock {
  height: 100%;
  flex-grow: 3;

  // box-shadow: inset 1px 1px 8px 3px black;
}

.sideBar {
  border:1px solid black;
  flex-grow: 1;
}

.main {
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  height:calc(100% - 44px);
}

.wrapper {
  height: 100vh ;
}
</style>
