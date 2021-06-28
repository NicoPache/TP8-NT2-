<template>
  <section class="src-components-form">
    <section class="src-components-form">
      <div class="container ">
        <h2 class="titulo">Formulario</h2>
        <hr />

        <vue-form :state="formState" @submit.prevent="enviar()">
          <!-- ------------------------------------------------------------------------ -->
          <!-- Campo nombre -->
          <validate tag="div">
            <label for="nombre"><i>Nombre</i></label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              class="form-control my-3"
              autocomplete="off"
              v-model.trim="formData.nombre"
              required
              :minlength="nombreLengthMin"
              :maxlength="nombreLengthMax"
              no-espacios
              no-numero
            />

            <field-messages name="nombre" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
              <div slot="no-espacios" class="alert alert-danger mt-1">
                No se permiten espacios intermedios en este campo
              </div>
              <div slot="no-numero" class="alert alert-danger mt-1">
                No se permiten numeros
              </div>
              <div slot="minlength" class="alert alert-danger mt-1">
                Se deben ingresar como mínimo {{ nombreLengthMin }} caracteres
              </div>
              <div
                v-if="formData.nombre.length == nombreLengthMax"
                class="alert alert-danger mt-1"
              >
                Máximo de caracteres {{ nombreLengthMax }} alcanzados
              </div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="edad"><i>Edad</i></label>
            <input
              type="number"
              id="edad"
              name="edad"
              class="form-control my-3"
              autocomplete="off"
              v-model.number="formData.edad"
              required
              :min="edadMin"
              :max="edadMax"
            />
            <field-messages name="edad" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
              <div slot="min" class="alert alert-danger mt-1">
                Edad minima {{ edadMin }}
              </div>
              <div slot="max" class="alert alert-danger mt-1">
                Edad maxima {{ edadMax }}
              </div>
            </field-messages>
          </validate>

          <validate tag="div">
            <label for="email"><i>Email</i></label>
            <input
              type="email"
              id="email"
              name="email"
              class="form-control my-3"
              autocomplete="off"
              v-model.trim="formData.mail"
              required
              email-valido
            />

            <field-messages name="email" show="$dirty">
              <div slot="required" class="alert alert-danger mt-1">
                Campo requerido
              </div>
              <div slot="email-valido" class="alert alert-danger mt-1">
                Email invalido
              </div>
            </field-messages>
          </validate>

          <button
            class="btn btn-success my-4"
            :disabled="formState.$invalid"
            type="submit"
          >
            Enviar
          </button>
        </vue-form>
        <hr />

        <br />
      </div>
    </section>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-form',
    props: [],
    mounted () {

    },
    data () {
      return {
      urlUsuarios : 'https://60a9668c20a64100173071ea.mockapi.io/people',
      formData : this.getInicialData(),
      formState: {},
      nombreLengthMin:3,
      nombreLengthMax:15,
      edadMax:120,
      edadMin:18,
      post:[],

      }
    },
     methods: {

  
       

  /*      postUsuario() {
        console.log('postUsuario')
        
          this.axios.post(this.urlUsuarios, this.formData, {'content-type':'application/json'}).
          then(respuesta => {console.log(`agregado -----> ${respuesta}`)
          }).catch( error => console.error(error))
},
 */
    getInicialData() {
      return {
         nombre: '',
         edad:'',
         mail:'',
       }
    },


    enviar() {
      this.$store.dispatch("addPersona", this.formData);
      this.formData = this.getInicialData()
      this.formState._reset()

    },
     },
    computed: {


    }
  }


</script>

<style scoped lang="css">

.titulo {
  padding-top: 10px;
}
</style>
