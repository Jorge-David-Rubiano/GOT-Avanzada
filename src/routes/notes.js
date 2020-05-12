const router = require('Express').Router();

const Note = require('../models/Note');

router.get('/notes/add',(req, res)=>{
    res.render('notes/new-note');
})

router.post('/notes/new-note', async (req,res)=>{
    const { nombre,n_hijos,nombre_hijos,problema} = req.body;
    const errors = [];
    if(!nombre){
        errors.push({text: 'Por favor, escribe un nombre'})
    }
    if(!n_hijos){
        errors.push({text: 'Por favor, digita el numero de hijos que tienes'})
    }
    if(!nombre_hijos){
        errors.push({text: 'Por favor, escribe el nombre de tus hijos'})
    }
    if(!problema){
        errors.push({text: 'Por favor, escribe cual es tu problema'})
    }
    if(errors.length > 0){
        res.render('notes/new-note',{
            errors,
            nombre,
            n_hijos,
            nombre_hijos,
            problema
        });
    }
    else{
        const newNote = new Note({nombre,n_hijos,nombre_hijos,problema});
        await newNote.save();
        res.redirect('/notes');
    }
  
});

router.get('/notes', async (req, res) => {
    await Note.find().sort({date: 'desc'})
      .then(documentos => {
        const contexto = {
            notes: documentos.map(documento => {
            return {
                nombre: documento.nombre,
                n_hijos: documento.n_hijos,
                nombre_hijos: documento.nombre_hijos,
                problema: documento.problema
            }
          })
        }
        res.render('notes/all-notes', {
 notes: contexto.notes }) 
      })
  })

  router.delete('/notes/delete/:id', async (req,res)=>{
    await Note.findByIdAndDelete(req.params.id);
    res.redirect('/notes');
  })

module.exports = router;