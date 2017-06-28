const Table = require('../../models/tableModels');
      dbx = require('../../utils/dbx');

module.exports = {
  downloadOneCtrl: (req, res) => {
    Table.Dog.findOne({ where: {id: req.params.id }})
    .then(dog => dbx.download(dog.imageLink))
    .then(image => {
      res.writeHead(200, {'Content-Type': 'image/jpeg'});
      res.end(image.fileBinary, 'binary');
    })
    .catch(error => res.sendStatus(409, error));
  }
};