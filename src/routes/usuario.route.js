import { Router } from "express";
import * as usuarioController from "../controllers/usuario.controller.js"

const router = Router();

router.get("/login", usuarioController.login); //add

router.get("/",usuarioController.listar);
router.get("/:id",usuarioController.buscarPorId);
router.get("/",usuarioController.criar); //add

export default router;