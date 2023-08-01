//Conexion de la base de datos
import { Sequelize } from "sequelize";

const  db = new Sequelize('database_app', 'root' , 'manager', {
        host: 'localhost',
        dialect: 'mysql',
        define: {
                timestamps: false
            }

})

export default db