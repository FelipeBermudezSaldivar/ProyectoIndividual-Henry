const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    resumen_de_plato: {
      type: DataTypes.STRING,
      allowNull: false
    },
    health_score: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paso_a_paso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    created: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
