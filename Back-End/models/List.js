import mongoose, { Schema, model } from "mongoose";

const listSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    type: { type: String },
    genre: { type: String },
    content: { type: Array },
  },
  { timestamps: true, versionKey: false } // use to avoid creating of __v field while creating new documents
);

const List = model("List", listSchema);

export default List;
