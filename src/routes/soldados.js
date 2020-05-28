const router = require('Express').Router();

const Soldado = require('../models/Soldado');

router.get('/soldados/add',(req, res)=>{
    res.render('soldados/new-soldado');
})

router.post('/soldados/new-soldado', async (req,res)=>{
    const { nombre,especialidad,cargo,asesinatos,interes} = req.body;
    const errors = [];
    if(!nombre){
        errors.push({text: 'Por favor, escribe un nombre'})
    }
    if(!especialidad){
        errors.push({text: 'Por favor, digita la especialidad'})
    }
    if(!cargo){
        errors.push({text: 'Por favor, escribe el cargo'})
    }
    if(!asesinatos){
        errors.push({text: 'Por favor, escribe el número de asesinatos'})
    }
    if(!interes){
        errors.push({text: 'Por favor, escribe si la Khaleesi está interesada'})
    }
    if(errors.length > 0){
        res.render('soldados/new-soldado',{
            errors,
            nombre,
            especialidad,
            cargo,
            asesinatos,
            interes
        });
    }
    else{
        const newSoldado = new Soldado({nombre,especialidad,cargo,asesinatos,interes});
        await newSoldado.save();
        res.redirect('/soldados');
    }
  
});

router.get('/soldados', async (req, res) => {
    await Soldado.find().sort({date: 'desc'})
      .then(documentos => {
        const contexto1 = {
            soldados: documentos.map(documento1 => {
            return {
                _id: documento1._id,
                nombre: documento1.nombre,
                especialidad: documento1.especialidad,
                cargo: documento1.cargo,
                asesinatos: documento1.asesinatos,
                interes: documento1.interes
            }
          })
        }
        res.render('soldados/all-soldados', {
 soldados: contexto1.soldados }) 
      })
  })

  router.get('/soldados/edit/:id', async (req, res) => {

    const soldado = await Soldado.findById(req.params.id)
    .then(data =>{
        return {
            nombre:data.nombre,
            especialidad: data.especialidad,
            cargo:data.cargo,
            asesinatos: data.asesinatos,
            interes: data.interes,
            id:data.id
        }
    })
    res.render('soldados/edit-soldados',{soldado})
});

router.put('/soldados/edit-soldados/:id', async (req, res) =>{
    const {nombre,especialidad,cargo,asesinatos,interes} = req.body;
     await Soldado.findByIdAndUpdate(req.params.id,{nombre,especialidad,cargo,asesinatos,interes});
     res.redirect('/soldados');
});

  router.delete('/soldados/delete/:id', async (req,res)=>{
    await Soldado.findByIdAndDelete(req.params.id);
    res.redirect('/soldados');
  })


module.exports = router;