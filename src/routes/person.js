let express = require('express'); // inyección de la dependecia
let router = express.Router(); // instanciamos el router

router.get('/person', function (req, res) { // página principal
    res.send('¡Has solicitado el listado de personas!'); // enviamos un mensaje
});

module.exports = router; // exportamos el router