const { DataTypes } = require('sequelize');
const sequelize = require('../config/db-connection');

const Agent = sequelize.define(
  'agent',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  
    contact: {
      type: DataTypes.STRING,
    },
    FutsalName: {
      type: DataTypes.STRING,
    },
 
 
   
  },
  {
    freezeTableName: true,
  }
);

module.exports = Agent;


