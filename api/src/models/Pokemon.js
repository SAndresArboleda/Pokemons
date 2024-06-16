const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,  //algoritmo que ayuda a generar a UUID
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: {
          args:[3,50],
          msg: 'El nombre debe ser entre 3 y 50 caracteres'
        },
        isAlpha:{
          msg: 'El nombre del pokemon solo puede tener letras'
        }
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,      
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  },
    { timestamps: false }, // para que en la tabla no me arroje la columna de createdAT y updatedAT
    { freezeTableName: true },//{freezeTableName: true} // esto es para que no muestre en la tabla la s al final. en este ejemplo pokemons,
    // si lo ponemos despues de crear la tabla y sale con la s, entonces me creará otra tabla.
  );
};
