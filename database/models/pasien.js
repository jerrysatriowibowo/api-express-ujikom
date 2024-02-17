'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pasien.init({
    nama: DataTypes.STRING,
    jenis_kelamin: DataTypes.STRING,
    alamat: DataTypes.STRING,
    tgl_lahir: DataTypes.STRING,
    no_telp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pasien',
  });
  return Pasien;
};