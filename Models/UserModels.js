import { Sequelize, DataTypes } from "sequelize";

import db from "../config/database.js";

const User = db.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    nomor_resi: {
        type: DataTypes.STRING,
    },
    nama_penerima: {
        type: DataTypes.STRING,
    },
    alamat_penerima: {
        type: DataTypes.TEXT,
    },
    tanggal_pengiriman: {
        type: DataTypes.DATE,
    },
    status_pengiriman: {
        type: DataTypes.ENUM('Dikirim', 'Diterima', 'Ditolak'),
    },
});

export default User;

(async () => {
    await db.sync();
})();