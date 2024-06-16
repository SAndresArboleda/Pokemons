const axios = require('axios');
const {Type} = require ('../db')

const getTypes = async () =>{
    const allTypes = await Type.findAll();
    if(allTypes.length){
        return allTypes;
    }else{
        const {data} = await axios.get('https://pokeapi.co/api/v2/type')  //si data no esta dentro de { } no se descargan en la BD de postgres
            for (const type of data.results) {
                await Type.create({
                    name: type.name,
                })
            }
            return Type.findAll()
            
    }
}


module.exports = { getTypes}

