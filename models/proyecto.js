const { Schema, model} = require('mongoose')

const ProyectoSchema = Schema({
    numero: {
        type: String,
        required: [true, 'Numero requerido'],
        unique: [true, 'Proyecto en uso']
    },
    titulo: {
        type: String,
        required: [true, 'Titulo requerido']
    },
    fechaIniciacion: {
        type: Date,
        required: [true, 'Fecha de iniciacion requerida']
    },
    fechaEntrega: {
        type: Date,
        required: [true, 'Fecha de entrega requerida']
    },
    valor: {
        type: Number,
        required: [true, 'Valor requerido']
    },
    fechaCreacion: {
        type: Date,
        default: new Date()
    },
    fechaActualizacion: {
        type: Date,
        default: new Date()
    },
    tipoProyecto: {
        type: Schema.Types.ObjectId,
        ref: 'TipoProyecto',
        required: true
    },
    etapas: {
        type: Schema.Types.ObjectId,
        ref: 'Etapa',
        required: true
    },
    clientes: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    universidad: {
        type: Schema.Types.ObjectId,
        ref: 'Universidad',
        required: true
    }
})

module.exports = model('Proyectos', ProyectoSchema)
