const router = require('express').Router();
const pasienController = require("../controllers/pasienController");

router.post('/api/v1/pasien', pasienController.create);
router.get('/api/v1/pasien', pasienController.findAll);
router.put('/api/v1/pasien/:id', pasienController.update);
router.delete('/api/v1/pasien/:id', pasienController.delete);
router.get('/api/v1/pasien/:id', pasienController.findOne);

module.exports = router;