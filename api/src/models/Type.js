const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Type', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,    
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,           
    }
},
    { timestamps: false }, // para que en la tabla no me arroje la columna de createdAT y updatedAT
    { freezeTableName: true },//{freezeTableName: true} // esto es para que no muestre en la tabla la s al final. en este ejemplo pokemons,
    // si lo ponemos despues de crear la tabla y sale con la s, entonces me creará otra tabla.
  );
};