import mongoose from "mongoose";

const user = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    salt: String,
    hash: String
  });


export default mongoose.model('User',user);