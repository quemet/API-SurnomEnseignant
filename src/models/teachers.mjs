const TeacherModel = (sequelize, DataTypes) => {
  return sequelize.define(
    "Teacher",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender: {
        type: DataTypes.CHAR,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      origin: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fkSection: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};

export { TeacherModel };
