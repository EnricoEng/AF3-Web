<template>
  <div>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>
    <v-img
      height="500"
      src="https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3076881:1621519209/shih-tzu.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=1a0f04b"
    ></v-img>
    <v-card-title>Cachorros</v-card-title>
  </v-card>
  </div>
</template>
<script>
  export default {
    name: 'Cachorros',
    data: () => ({
      loading: false,
      selection: 1,
    }),
    methods: {
      reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>
