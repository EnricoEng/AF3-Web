<template>
    <v-app-bar app
      absolute
      color="green"
      dark
      shrink-on-scroll
      prominent
      scroll-target="#scrolling-techniques"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title>bar app</v-app-bar-title>
      <v-spacer></v-spacer>
      <v-btn v-for="(item,i) in items"
          :key="i"
          link
          @click = "$router.push(item.address)">
      <span>{{ item.title }}</span>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
</template>
<script>
export default {
  name: 'App',
  props:['items'],
  data: () => ({
  }),
};
</script>