<template>
  <v-app>
    <NavDrawer :items = "items"></NavDrawer>
    <SystemBar></SystemBar>
  <v-card class="overflow-hidden">
    <AppBar :items = "items"></AppBar> 
    <v-container style="height: 200px;"></v-container>
  </v-card>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <Footer></Footer>

  <BottomNav></BottomNav>

</v-app>
</template>

<script>
import AppBar from "@/components/AppBar"
import NavDrawer from "@/components/NavDrawer"
import BottomNav from "@/components/BottomNav"
import Footer from "@/components/Footer"
import SystemBar from "@/components/SystemBar"

export default {
  name: 'App',
  components:{
    AppBar,
    NavDrawer,
    BottomNav,
    Footer,
    SystemBar
  },
  data () {
    return {
      items: [
          {title:"Home", address:"/"},
          {title:"About", address:"/about"},
          {title:"Cachorros", address:"/cachorros"},
          {title:"bike", address:"/bike"},
          {title:"Gatos", address:"/gatos"},
        ],
    }
  },
};
</script>
