<template>
    <v-navigation-drawer app permanent>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            AF1
          </v-list-item-title>
          <v-list-item-subtitle>
             SEJA BEM VINDO 
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="(item,i) in items"
          :key="i"
          link
          @click = "$router.push(item.address)"
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>
<script>
export default {
  name: 'App',
  props:['items'],
  data: () => ({
  }),
};
</script>