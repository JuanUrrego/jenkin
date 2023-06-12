const Proyectos = require('../models/proyecto')
const { request, response} = require('express')
const Cliente = require('../models/clientes')
const Etapa = require('../models/etapas')
const TipoProyecto= require('../models/tipoProyecto')
const Universidad = require('../models/universidad')
// crear
const createProyectos= async (req = request, 
    res = response) => {
    try{
        const data = req.body
        console.log(data)
        const { clientes, etapas, tipoProyecto, universidad } = data;
        // validando cliente
        const clientesDB = Cliente.findOne({
            _id: clientes._id,
            estado: true
        })// select * from clientes where _id=? and estado=true
        if(!clientesDB){
            return res.status(400).json({msg: 'cliente invalido'})
        }
        // validando etapas
        const etapasDB = Etapa.findOne({
            _id: etapas._id,
            estado: true
        })// select * from etapas where _id=? and estado=true
        if(!etapasDB){
           return res.status(400).json({msg: 'etapa invalido'})
        }
        // validando tipo proyecto
        const tipoProyectoDB = TipoProyecto.findOne({
            _id: tipoProyecto._id,
            estado: true
        })// select * from tipoproyecto where _id=? and estado=true
        if(!tipoProyectoDB){
           return res.status(400).json({msg: 'estado invalido'})
        }
        // validando universidad
        const universidadDB = Universidad.findOne({
            _id: universidad._id,
            estado: true
        })// select * from universidad where _id=? and estado=true
        if(!universidadDB){
           return res.status(400).json({msg: 'universidad invalida'})
        }      
        const proyecto = new Proyectos(data)

        await proyecto.save()
        
        return res.status(201).json(proyecto)
    }catch(e){
        return res.status(500).json({
            msg: 'Error general ' + e
        })
    }
}

//listar todos
const getProyectos = async (req = request, 
    res = response) => {
        try{
            const proyectoDB = await Proyectos.find()//select * from inventarios
                .populate({
                    path: 'clientes'
                })
                .populate({
                    path: 'etapas'
                })
                .populate({
                    path: 'tipoProyecto'
                })
                .populate({
                    path: 'universidad'
                })
            return res.json(proyectoDB)
        }catch(e){
            return res.status(500).json({
                msg: 'Error general ' + e
            })
        }
}

// actualizar proyecto
const updateProyectosByID = async (req = request, 
    res = response) => {

    try{
        const { id } = req.params.id
        const data = req.body
        const proyecto  = await Proyectos.findByIdAndUpdate(id, data, {new: true})
        return res.status(201).json(proyecto)
    }catch(e){
        console.log(e)
        return res.status(500).json({msj: 'Error'}) 
    }

}


module.exports = { createProyectos, 
    getProyectos, 
    updateProyectosByID}