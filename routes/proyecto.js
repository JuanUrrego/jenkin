const { Router } = require('express')
const { createProyectos, getProyectos, updateProyectosByID} =
 require('../controllers/proyecto')

const router = Router()

// crear
router.post('/', createProyectos)

// consultar todos
router.get('/', getProyectos)

// actualizar
router.put('/:id', updateProyectosByID)

module.exports = router;