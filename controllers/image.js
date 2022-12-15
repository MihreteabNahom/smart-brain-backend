 
const handleImage = (req,res, db) => {
    const {id} = req.body;
      db.select('*').from('users').where('id','=', id)
    .increment('entries', 1)
    .returning('entries')
    .then(entries => {
        res.json(entries[0]);
    }) 
    .catch(err => res.json(400).json('unable to get entries'))
}
module.exports = {
    handleImage,
}
