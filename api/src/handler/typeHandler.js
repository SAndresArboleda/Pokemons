const { getTypes } = require("../controller/typeController")


const getTypesHandler = async (req, res) =>{
    try {
        const response = await getTypes()
        res.status(200).json(response)
    } catch (error) {
        res.status(400).send({error:error.message, error: 'Error interno en servidor'})
    }

}

module.exports = { getTypesHandler}