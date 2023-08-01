//importamos el modelo que se hizo
import General from "../models/BlogModel.js";
import Direccion from "../models/Direccion.js";
import Particulares from "../models/Particulares.js";

//General
/**
 * Vizualizar los datos de la base de datos
 * @param req es un objeto que contiene información sobre la petición HTTP que ha provocado el evento.
 * @param res para devolver la respuesta HTTP deseada.
 */
export const  getAllBlogs = async (req, res)=> {
    try {
           const blogs = await General.findAll()
           res.json(blogs)
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Vizualizar un registro
export const getBlog = async (req, res)=> {
        try {
           const  blog = await General.findAll({
                where: { id: req.params.id}
            })
            res.json(blog[0])
        } catch (error) {
            res.json({ error: error.message })
        }
}
//Crear un registro
export const createBlog = async (req, res)=> {
    try {
        await General.create( req.body )
        res.json({"message": "!!Los datos han sido guardados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Borrar algun dato de la base de datos
export const deleteBlog = async (req,res)=> {
    try {
       await General.destroy({
            where: { id: req.params.id}
        })
        res.json({"message": "!!Los datos han sido Eliminados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Editar algun dato en la base de datos
export const updateBlog = async (req, res)=> {
    try {
        await General.update( req.body, {
            where: { id: req.params.id}
        })
        res.json({"message": "!!Los datos han sido Actualizados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}

//Direccion
//Vizualizar los datos de la base de datos
export const  getAllDire = async (req, res)=> {
    try {
           const direccion = await Direccion.findAll()
           res.json(direccion)
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Vizualizar un registro
export const getDire = async (req, res)=> {
        try {
           const  direccion = await Direccion.findAll({
                where: { id: req.params.id}
            })
            res.json(direccion[0])
        } catch (error) {
            res.json({ error: error.message })
        }
}
//Crear un registro
export const createDire = async (req, res)=> {
    try {
        await Direccion.create( req.body )
        res.json({"message": "!!Los datos han sido guardados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Borrar algun dato de la base de datos
export const deleteDire = async (req,res)=> {
    try {
       await Direccion.destroy({
            where: { id: req.params.id}
        })
        res.json({"message": "!!Los datos han sido Eliminados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Editar algun dato en la base de datos
export const updateDire = async (req, res)=> {
    try {
        await Direccion.update( req.body, {
            where: { id: req.params.id}
        })
        res.json({"message": "!!Los datos han sido Actualizados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}

//Particulares
//Vizualizar los datos de la base de datos
export const  getAllPart = async (req, res)=> {
    try {
           const blogs = await Particulares.findAll()
           res.json(blogs)
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Vizualizar un registro
export const getPart = async (req, res)=> {
        try {
           const  blog = await Particulares.findAll({
                where: { id: req.params.id}
            })
            res.json(blog[0])
        } catch (error) {
            res.json({ error: error.message })
        }
}
//Crear un registro
export const createPart = async (req, res)=> {
    try {
        await Particulares.create( req.body )
        res.json({"message": "!!Los datos han sido guardados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Borrar algun dato de la base de datos
export const deletePart = async (req,res)=> {
    try {
       await Particulares.destroy({
            where: { id: req.params.id}
        })
        res.json({"message": "!!Los datos han sido Eliminados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}
//Editar algun dato en la base de datos
export const updatePart = async (req, res)=> {
    try {
        await Particulares.update( req.body, {
            where: { id: req.params.id}
        })
        res.json({"message": "!!Los datos han sido Actualizados!!"})
    } catch (error) {
        res.json({ error: error.message })
    }
}