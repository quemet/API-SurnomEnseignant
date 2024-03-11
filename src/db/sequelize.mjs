import { DataTypes, Sequelize } from "sequelize";

import { teachers } from "./mock-teachers.mjs";

import { TeacherModel } from "../models/teachers.mjs";

const sequelize = new Sequelize("db_surnom_enseignant", "root", "root", {
  host: "localhost",
  port: "6033",
  dialect: "mysql",
  logging: false,
});

const Teacher = TeacherModel(sequelize, DataTypes);

let initDb = () => {
  return sequelize.sync({ force: true }).then((_) => {
    importTeachers();
    console.log(
      "La base de données db_surnom_enseignant a bien été synchronisée"
    );
  });
};

const importTeachers = () => {
  teachers.map((teacher) => {
    Teacher.create({
      lastname: teacher.lastname,
      firstname: teacher.firstname,
      gender: teacher.gender,
      nickname: teacher.nickname,
      origin: teacher.origine,
      fkSection: teacher.fkSection,
    }).then((teacher) => console.log(teacher.toJSON()));
  });
};

export { sequelize, initDb, Teacher };
