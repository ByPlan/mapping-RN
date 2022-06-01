"use strict";
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class Answer extends Model {
    static associate(models) {
      models.Answer.belongsTo(models.Post);
      models.Answer.belongsTo(models.Question);
    }
  }
  Answer.init(
    {
      content: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Answer",
    }
  );
  return Answer;
};