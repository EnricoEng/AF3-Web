<template>
  <div>
    <h1>Gatos</h1>
        <GatosCard :cardInfo="api" ></GatosCard>
  </div>
</template>

<script>
  import GatosCard from '../components/GatosCard'

  export default {
    name: 'Home',
    data(){
      return{
        titleview:this.$store.state.title,
      }
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      },
      api(){
          return this.$store.state.api
      }
    },
    components: {
      GatosCard,
    },
    async created(){
        this.$store.dispatch('fetchCats')
    }
  }
</script>