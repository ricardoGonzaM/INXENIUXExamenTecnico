//rutas del sistema
import express from "express";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
  getAllDire,
  getDire,
  createDire,
  deleteDire,
  updateDire,
  getAllPart,
  getPart,
  createPart,
  deletePart,
  updatePart,
} from "../controllers/BlogController.js";

const router = express.Router();

//Rutas de General
router.get("/gene", getAllBlogs);
router.get("/gene/:id", getBlog);
router.post("/gene", createBlog);
router.put("/gene/:id", updateBlog);
router.delete("/gene/:id", deleteBlog);

//Rutas de Direccion
router.get("/dire", getAllDire);
router.get("/dire/:id", getDire);
router.post("/dire", createDire);
router.put("/dire/:id", updateDire);
router.delete("/dire/:id", deleteDire);

//Rutas de Particulares
router.get("/part", getAllPart);
router.get("/part/:id", getPart);
router.post("/part", createPart);
router.put("/part/:id", updatePart);
router.delete("/part/:id", deletePart);

export default router;
