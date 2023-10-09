import { Sequelize } from "sequelize"

const db = new Sequelize("pengiriman_db", "root", "asd123", {
    host: "127.0.0.1",
    dialect: "mysql",
});

db.authenticate()
.then(() => `Database sudah terhubung`)
.catch(error => console.log(error));

export default db;