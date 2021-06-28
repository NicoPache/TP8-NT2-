<template>

  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <!-- Opción ruta root -->
      <router-link to="/">
        <a class="navbar-brand mx-3" href="#">Inicio</a>
      </router-link>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">

          <!-- Opción ruta binding -->
          <li class="nav-item">
            <router-link to="/form">
              <a class="nav-link" href="#">formulario</a>
            </router-link>
          </li>

          <!-- Opción ruta estructura -->
          <li class="nav-item">
            <router-link to="/personas">
              <a class="nav-link" href="#">Personas</a>
            </router-link>              
          </li>


        </ul>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-navbar {

  }
</style>
