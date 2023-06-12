const {Schema, model} = require('mongoose')

const EtapasSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'Nombre requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    }
})

module.exports = model('Etapa', EtapasSchema)
