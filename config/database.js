import { Sequelize } from "sequelize"

const db = new Sequelize("railway", "root", "6doqj0GDjgw5DJG7szwf", {
    host: "containers-us-west-143.railway.app",
    port: "5739",
    dialect: "mysql",
});

db.authenticate()
.then(() => `Database sudah terhubung`)
.catch(error => console.log(error));

export default db;