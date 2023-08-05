<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <ConsultarVehiculos></ConsultarVehiculos>
</template>

<script>
import ConsultarVehiculos from "./modules/vehiculos/pages/ConsultarVehiculos.vue";
export default {
  name: 'App',
  components: {
    ConsultarVehiculos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
