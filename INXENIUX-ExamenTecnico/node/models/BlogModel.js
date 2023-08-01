//Importacion de la base de datos de datos de generales
import db from "../database/db.js";

import { DataTypes } from "sequelize";

const General = db.define('generales', {
    
    Nombre:{ type: DataTypes.STRING},
    Ap_Paterno:{type: DataTypes.STRING},
    Ap_Materno:{type: DataTypes.STRING},
    Edad:{type: DataTypes.NUMBER},
    Sexo:{type: DataTypes.STRING},
})

export default General 
