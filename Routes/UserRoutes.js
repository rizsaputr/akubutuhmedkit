import express from "express";
import { QueryTypes } from "sequelize";
import User from "../Models/UserModels.js";

const router = express.Router();

router.post("/data", async (req, res) => {
    try {
      await User.create(req.body);
      res.status(201).json({ msg: "Database Successfully" });
    } catch (error) {
      res.send(error.message);
    }
  });

  router.get("/data/:nomor_resi", async (req, res) => {
    try {
      const result = await User.sequelize.query('SELECT * FROM pengiriman u WHERE u.nomor_resi = ?',
      {
        replacements: [req.params.nomor_resi],
        type: QueryTypes.SELECT
      }
      );
      res.status(201).json({ msg: "Database ditemukan", result: result });
    } catch (error) {
      res.send(error.message);
    }
  });

  router.put("/data/:nomor_resi", async (req, res) => {
    try {
      const result = await User.sequelize.query('UPDATE pengiriman u SET u.kelurahan = ? WHERE nomor_resi = ?',
      {
        replacements: [req.body.kelurahan, req.params.id],
        type: QueryTypes.UPDATE
      }
      );
      res.status(200).json({ msg: "Data berhasil diupdate!", result: result });
    } catch (error) {
      res.send(error.message);
    }
  });

  router.delete("/data/:nomor_resi", async (req, res) => {
    try {
      const id = req.params.id;
      const fetchedData = await User.findOne({ where: { id: id }});
      await fetchedData.destroy({msg: 'Success Delete!'});
      res.status(200).json();
    } catch (error) {
      res.send(error.message);
    }
  });
  
  export default router;