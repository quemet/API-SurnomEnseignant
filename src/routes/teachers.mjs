import express from "express";

import { success } from "./helper.mjs";

import { Teacher } from "../db/sequelize.mjs";

const teachersRouter = express();

teachersRouter.get("/", (req, res) => {
  Teacher.findAll().then((teachers) => {
    const message = "La liste des teachers a bien été récupérée.";
    res.json(success(message, teachers));
  });
});

teachersRouter.get("/:id", (req, res) => {
  Teacher.findByPk(req.params.id).then((teacher) => {
    const message = `Le teacher dont l'id vaut ${teacherId} a bien été récupéré.`;
    res.json(success(message, teacher));
  });
});

teachersRouter.post("/", (req, res) => {
  Teacher.create(req.body).then((createdTeacher) => {
    const message = `Le teacher ${createdTeacher.lastname} a bien été créé !`;
    res.json(success(message, createdTeacher));
  });
});

teachersRouter.put("/:id", (req, res) => {
  const teacherId = req.params.id;
  Teacher.update(req.body, { where: { id: teacherId } }).then((_) => {
    Teacher.findByPk(teacherId).then((updatedTeacher) => {
      const message = `Le produit ${updatedTeacher.lastname} dont l'id vaut ${teacherId} a été mis à jour avec succès !`;
      res.json(success(message, updatedTeacher));
    });
  });
});

teachersRouter.delete("/:id", (req, res) => {
  Teacher.findByPk(req.params.id).then((deletedTeacher) => {
    Teacher.destroy({ where: { id: deletedTeacher.id } }).then((_) => {
      const message = `Le teacher ${deletedTeacher.lastname} a bien été supprimé !`;
      res.json(success(message, deletedTeacher));
    });
  });
});

export { teachersRouter };
