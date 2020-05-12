const router = require('Express').Router();


router.get('/dragones', (req,res)=>{
res.render('dragones/all-dragons');
});

 module.exports = router;