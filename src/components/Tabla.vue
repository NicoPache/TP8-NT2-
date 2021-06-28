<template >

  <section class="src-components-tabla">
    
    <div class="container">
    <div v-if="obtenerPersonas.length" class="table">
      <table class="table  table ">
        <!-- encabezado de la tabla -->
        <tr>
          <th v-for="(col, index) in getCols" :key="index">{{ col }}</th>
        </tr>

        <!-- filas con los datos -->
        <tr v-for="(item, index) in obtenerPersonas" :key="index">
          <td v-for="(col, index) in getCols" :key="index">{{ item[col] }}</td>
        </tr>
      </table>
    </div>
    
    <div v-else-if="getNoHayItems" class="alert alert-warning mt-1">
        no hay personas para mostrar
    </div>
  </div>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-components-tabla',
    props: [],

    beforeCreate(){
    this.$store.dispatch('getPersonas')
    },

    beforeMount(){

    },
    mounted () {
    
    this.items = this.obtenerPersonas;
    this.nohay()
    },
    data () {
      return {
      
       noHayItems:false
      }
    },
    methods: {

     

     /*  getUsuarios() {
        
      this.axios(this.urlUsuarios).
      then(respuesta =>{this.items = respuesta.data
      })
      .catch( error => console.error(error))
       
      }, */

      nohay(){
        setTimeout(() => {
         if (!this.obtenerPersonas.length){
            this.noHayItems= true
          }
          }, 300);
      }
   
    },
    computed: {
        getCols() {
        return Object.keys(this.obtenerPersonas[0])
      },
       getNoHayItems(){
        return this.noHayItems
      },
     obtenerPersonas(){  
        return this.$store.state.personas
      },
    }
}


</script>

<style scoped lang="css">
  .src-components-tabla {
    text-align: center;
  }
 
</style>
