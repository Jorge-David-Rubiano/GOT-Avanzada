const express = require('Express');
const router = express.Router();

const Reino = require('../models/Reino');

router.get('/regiones-poniente', async (req, res) =>{
     const regiones = await Reino.find({region:'Poniente'});
     res.render('regiones/poniente', {regiones});
});
router.get('/regiones-essos', async (req, res) =>{
     const regi = await Reino.find({region:'Essos'});
     const libre = await Reino.find({lugarA:'Ciudad Libre'});
     res.render('regiones/essos', {regi,libre});     
});


module.exports = router;