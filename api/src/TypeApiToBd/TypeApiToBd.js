// const axios = require('axios');
// const { Type } = require('../db')

// const typeApiToBd = async () => {
//     try {
//         const {data} = await axios.get('https://pokeapi.co/api/v2/type')  //si data no esta dentro de { } no se descargan en la BD de postgres
//         if (data.results) {
//             for (const type of data.results) {
//                 await Type.create({
//                     name: type.name,
//                 })
//             }
//         } else {
//             throw new Error();
//         }
//     } catch (error) {
//         console.log('La carga de los Type no fué Exitosa');
//         console.log(error.message); 
//     }
// }
// module.exports = {
//     typeApiToBd
// }   