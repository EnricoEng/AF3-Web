import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    cards:[{info:"Cachorrinho", img:"https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3076881:1621519209/shih-tzu.jpg?f=16x9&h=720&q=0.8&w=1280&$p$f$h$q$w=1a0f04b"},
    {info:"Moto", img:"https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2020/03/30-2.jpg"},
    {info:"Carros", img:"https://i0.wp.com/loucosporcarro.com.br/wp-content/uploads/2018/05/1505_carros-eletricos02.png?resize=800%2C450&ssl=1"},
    {info:"Cafezinho", img:"https://i1.wp.com/frigideira.aiqfome.com/wp-content/uploads/2018/08/cafezinho.png?resize=750%2C500&ssl=1"},
    {info:"Espanha", img:"https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2021/06/Madrid-1170x650.jpg"},
    {info:"Italia", img:"https://www.segurospromo.com.br/blog/wp-content/uploads/2017/12/seguro-viagem-italia-cobertura-740x360.jpg"},
    {info:"Portugal", img:"https://1.bp.blogspot.com/-yuL1ltL3ntU/XzLaZwt-NJI/AAAAAAAABuI/BEHRwbXpYGszJnzNZ5Fg4i2TsdQVEsAlQCLcBGAsYHQ/s0/MARAVILHOSA%2Bakhgncsbzz621%2Bmaior%2B-%2B500.jpg"},
  ],
    title:"Fotos",
    api:[],
  },
  mutations: {
    set_api(state,payload){
      state.api=payload
      console.log(state.api.url)
    }
  },
  actions: {
    fetchCats(){
      axios.get('https://thatcopy.pw/catapi/rest/') 
      .then(res=>{
        console.log(res.data.url)
        const payload = res.data
        this.commit('set_api', payload)})
      .catch(err=>(console.log(err)))
    }
  },
  getters: {
    bigTitle(state){
      return state.title.toUpperCase()
    }
  }
})
