import { Sequelize, DataTypes } from "sequelize";

import db from "../config/database.js";

const User = db.define("user", {
    kodepos: {
        type: DataTypes.STRING,
    },
    id: {
        type: DataTypes.INTEGER,
    },
    kelurahan: {
        type: DataTypes.CHAR,
    },
    kabupaten: {
        type: DataTypes.CHAR,
    },
    provinsi: {
        type: DataTypes.CHAR,
    },
});

export default User;

(async () => {
    await db.sync();
})();