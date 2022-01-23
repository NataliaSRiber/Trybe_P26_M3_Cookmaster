const multer = require('multer');

const storage = multer.diskStorage({
  destination: (_req, _file, callback) => {
    callback(null, 'src/uploads');
  },
  filename: (req, _file, callback) => {
    const { id } = req.params;
    console.log(id);
    callback(null, `${id}.jpeg`);
  },
});

module.exports = multer({ storage }).single('image'); // opções do multer