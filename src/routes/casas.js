const express = require('Express');
const router = express.Router();

const Reino = require('../models/Reino');

router.get('/casa-stark', async (req, res) =>{     
     res.render('Casas/stark');
});
router.get('/casa-lannister', async (req, res) =>{     
     res.render('Casas/lannister');
});
router.get('/casa-targaryen', async (req, res) =>{     
     res.render('Casas/targaryen');
});
router.get('/casa-baratheon', async (req, res) =>{     
     res.render('Casas/baratheon');
});

module.exports = router;