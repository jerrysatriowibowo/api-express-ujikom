const authController = require('./authController');
const userController = require('./userController');
const pasienController = require('./pasienController');

module.exports = {
    auth: authController,
    user: userController,
    pasien: pasienController,
}