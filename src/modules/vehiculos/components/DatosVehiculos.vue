<template>
  <table id="tabla-carros">
        <thead>
            <tr>
                <th>id</th>
                <th>placa</th>
                <th>marca</th>
                <th>modelo</th>
                <th>precio</th>
                
            </tr>
        </thead>
        <tbody>
        </tbody>
    </table>
</template>

<script>
import {obtenerVehiculosFachada} from "../helpers/VehiculoCliente.js"

export default {

    methods: {

        async consultarVehiculos(){
            const data = await obtenerVehiculosFachada();

            console.log(data)
        }

    }

}
</script>

<style>
#tabla-carros {
    border-collapse: collapse; 
    width: 100%; 
}

#tabla-carros th {
    border: 1px solid black; 
    padding: 8px; 
    text-align: left; 

}







</style>