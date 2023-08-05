import axios from "axios"

export const obtenerVehiculosFachada = async () => {

    console.log('AXIOS')
    // return await obtenerEstudianteAPI(cedula);
    return await obtenerVehiculosAPIAxios();
}


const obtenerVehiculosAPIAxios = async () => {

    const data = axios.get(`http://localhost:8081/API/V1.0/Inventario/vehiculos`).then(r => r.data);
    console.log(data);
    return data

}